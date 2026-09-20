import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-2i4x0-m.css';
import '../../css/k/k-lsvvbfd.css';
import '../../css/p/pco6t-b8q.css';

const viewBox = {"width":53.927,"height":53.954,"top":-3.954};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a-2i4x0-m"><path class="k-lsvvbfd"/><path class="pco6t-b8q"/></g>`,
		"fallback": "thesvg-color:digital-ocean",
	});
}

export default Component;
