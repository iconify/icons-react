import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8o49bcjy.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8o49bcjy"/>`,
		"fallback": "fluent-mdl2:form-library-mirrored",
	});
}

export default Component;
