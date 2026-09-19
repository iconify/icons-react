import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rp16bptoo.css';
import '../../css/v/vgl5229gh.css';
import '../../css/j/jdsh2qbwv.css';
import '../../css/b/bssikkbkz.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rp16bptoo"/><path class="vgl5229gh"/><path class="jdsh2qbwv"/><path class="bssikkbkz"/></g>`,
		"fallback": "flagpack:bq-sa",
	});
}

export default Component;
