import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqx0q-9fn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oqx0q-9fn"/>`,
		"fallback": "gravity-ui:headphones",
	});
}

export default Component;
