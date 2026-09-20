import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il0b9_6at.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="il0b9_6at"/>`,
		"fallback": "vaadin:folder-open-o",
	});
}

export default Component;
