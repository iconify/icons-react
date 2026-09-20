import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5iwp7g-g.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5iwp7g-g"/>`,
		"fallback": "memory:checkbox-blank",
	});
}

export default Component;
