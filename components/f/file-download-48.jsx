import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dezwopb-j.css';
import '../../css/u/u8wp1qb3l.css';
import '../../css/z/zay6z3bib.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dezwopb-j"/><path class="u8wp1qb3l"/><path class="zay6z3bib"/>`,
		"fallback": "energy-icons:file-download-48",
	});
}

export default Component;
