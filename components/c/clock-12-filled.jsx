import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvo458bdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvo458bdi"/>`,
		"fallback": "boxicons:clock-12-filled",
	});
}

export default Component;
