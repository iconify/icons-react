import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez4nq7t0c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ez4nq7t0c"/>`,
		"fallback": "heroicons:document-currency-euro-16-solid",
	});
}

export default Component;
