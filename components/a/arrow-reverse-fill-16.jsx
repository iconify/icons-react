import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq3d8hulp.css';
import '../../css/i/izk0irbfh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq3d8hulp"/><path class="izk0irbfh"/>`,
		"fallback": "garden:arrow-reverse-fill-16",
	});
}

export default Component;
