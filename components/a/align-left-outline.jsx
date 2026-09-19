import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvx42bbes.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvx42bbes"/>`,
		"fallback": "ant-design:align-left-outline",
	});
}

export default Component;
