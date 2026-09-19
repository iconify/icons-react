import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxzmb8bzb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="dxzmb8bzb"/>`,
		"fallback": "charm:circle",
	});
}

export default Component;
