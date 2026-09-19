import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv4old3dr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv4old3dr"/>`,
		"fallback": "fluent-emoji-high-contrast:building-construction",
	});
}

export default Component;
