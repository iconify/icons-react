import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl5m2ibfh.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl5m2ibfh"/>`,
		"fallback": "fluent-mdl2:delete-rows-mirrored",
	});
}

export default Component;
