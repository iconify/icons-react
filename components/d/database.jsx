import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx-jz0bvo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vx-jz0bvo"/>`,
		"fallback": "gravity-ui:database",
	});
}

export default Component;
