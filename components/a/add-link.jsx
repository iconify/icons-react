import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfzihx9sq.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfzihx9sq"/>`,
		"fallback": "fluent-mdl2:add-link",
	});
}

export default Component;
