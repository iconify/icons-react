import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jz0sh0_5j.css';
import '../../css/y/y4r4x_bib.css';
import '../../css/g/g8lzf8ygw.css';
import '../../css/k/kttxodbxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jz0sh0_5j"/><circle class="y4r4x_bib"/><path class="g8lzf8ygw"/><path class="kttxodbxu"/></g>`,
		"fallback": "hugeicons:image-minus",
	});
}

export default Component;
