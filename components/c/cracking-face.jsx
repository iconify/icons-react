import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4zamhbtf.css';
import '../../css/g/gn5hjtb_w.css';
import '../../css/z/zqal-355k.css';
import '../../css/f/fmtn9zbqu.css';
import '../../css/v/vvgxfyurl.css';
import '../../css/t/tp4ce4bri.css';
import '../../css/p/pg6ecxb7c.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4zamhbtf"/><path class="gn5hjtb_w"/><path class="zqal-355k"/><path class="fmtn9zbqu"/><path class="vvgxfyurl"/><path class="tp4ce4bri"/><path class="pg6ecxb7c"/>`,
		"fallback": "openmoji:cracking-face",
	});
}

export default Component;
