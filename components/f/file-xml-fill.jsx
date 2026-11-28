import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7yq17xdg.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7yq17xdg"/>`,
		"fallback": "pullo:file-xml-fill",
	});
}

export default Component;
