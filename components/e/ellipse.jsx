import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emy61w2gd.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emy61w2gd"/>`,
		"fallback": "fluent-mdl2:ellipse",
	});
}

export default Component;
