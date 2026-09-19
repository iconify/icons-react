import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkaz_ncxo.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkaz_ncxo"/>`,
		"fallback": "si-glyph:calculator",
	});
}

export default Component;
