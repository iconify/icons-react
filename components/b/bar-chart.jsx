import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wd1nwx7pc.css';
import '../../css/b/bp0flui-u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wd1nwx7pc"/><path class="bp0flui-u"/>`,
		"fallback": "cil:bar-chart",
	});
}

export default Component;
