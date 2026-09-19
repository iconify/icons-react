import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/h/h6axb1buv.css';
import '../../css/n/nljoyacmt.css';
import '../../css/w/wop--n-hn.css';
import '../../css/v/vhr-_obxl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><rect class="h6axb1buv"/><rect class="nljoyacmt"/><rect class="wop--n-hn"/><path class="vhr-_obxl"/></g>`,
		"fallback": "glyphs-poly:grid-add",
	});
}

export default Component;
