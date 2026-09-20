import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5p28abwd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5p28abwd"/>`,
		"fallback": "vaadin:cloud-upload-o",
	});
}

export default Component;
