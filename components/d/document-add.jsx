import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg7-5s82w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg7-5s82w"/>`,
		"fallback": "heroicons-outline:document-add",
	});
}

export default Component;
