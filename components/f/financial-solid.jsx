import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4owzmtso.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4owzmtso"/>`,
		"fallback": "fluent-mdl2:financial-solid",
	});
}

export default Component;
