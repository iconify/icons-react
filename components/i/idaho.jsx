import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4kgskj6g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4kgskj6g"/>`,
		"fallback": "pinhead:idaho",
	});
}

export default Component;
