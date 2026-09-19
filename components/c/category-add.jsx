import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eteeavbsa.css';
import '../../css/i/izeh2ywyg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eteeavbsa"/><path class="izeh2ywyg"/>`,
		"fallback": "carbon:category-add",
	});
}

export default Component;
