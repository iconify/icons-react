import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqi20zl9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqi20zl9k"/>`,
		"fallback": "bxl:canva",
	});
}

export default Component;
