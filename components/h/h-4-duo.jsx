import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfij4xb7c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfij4xb7c"/>`,
		"fallback": "glyphs:h-4-duo",
	});
}

export default Component;
