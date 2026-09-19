import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epy0a-u5i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="epy0a-u5i"/>`,
		"fallback": "heroicons:document-chart-bar-20-solid",
	});
}

export default Component;
