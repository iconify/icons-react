import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1s4wrwpj.css';
import '../../css/v/vxlj3n_ms.css';
import '../../css/q/qe0qbnbcx.css';
import '../../css/f/fd0daibph.css';
import '../../css/z/z8y54-xyl.css';
import '../../css/v/vl-s-5bnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1s4wrwpj"/><path class="vxlj3n_ms"/><path class="qe0qbnbcx"/><path class="fd0daibph"/><path class="z8y54-xyl"/><path class="vl-s-5bnp"/>`,
		"fallback": "gcp:cloud-code",
	});
}

export default Component;
