import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh7jpabfb.css';
import '../../css/g/gak2xbgdu.css';
import '../../css/h/hs9m8_bbv.css';
import '../../css/b/bqa1tob7t.css';
import '../../css/m/mt44fjb8n.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xh7jpabfb"/><path class="gak2xbgdu"/><path class="hs9m8_bbv"/><path class="bqa1tob7t"/><path class="mt44fjb8n"/>`,
		"fallback": "devicon:google",
	});
}

export default Component;
