import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pim-13nez.css';
import '../../css/h/hx4043pqx.css';
import '../../css/v/vrd74fvzf.css';
import '../../css/m/mwl5gsbte.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pim-13nez"/><path class="hx4043pqx"/><path class="vrd74fvzf"/><path class="mwl5gsbte"/>`,
		"fallback": "ion:arrow-shrink",
	});
}

export default Component;
