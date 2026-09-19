import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqo1ngujj.css';

const viewBox = {"width":769,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqo1ngujj"/>`,
		"fallback": "whh:c",
	});
}

export default Component;
