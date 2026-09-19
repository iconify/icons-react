import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsmu98p6c.css';
import '../../css/h/hs-tb-btz.css';
import '../../css/m/mc75m8d8n.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsmu98p6c"/><path class="hs-tb-btz"/><path class="mc75m8d8n"/>`,
		"fallback": "ei:envelope",
	});
}

export default Component;
