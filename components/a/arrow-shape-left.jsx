import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul6fgxl1d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ul6fgxl1d"/>`,
		"fallback": "gravity-ui:arrow-shape-left",
	});
}

export default Component;
