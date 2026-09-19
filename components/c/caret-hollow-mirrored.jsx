import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcg0jybbz.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcg0jybbz"/>`,
		"fallback": "fluent-mdl2:caret-hollow-mirrored",
	});
}

export default Component;
