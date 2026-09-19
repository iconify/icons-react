import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/w/w6v_azclf.css';
import '../../css/b/bzbl_kbna.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="w6v_azclf"/><path class="bzbl_kbna"/></g>`,
		"fallback": "glyphs-poly:cli",
	});
}

export default Component;
