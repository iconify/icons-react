import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdgye8b4y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kdgye8b4y"/>`,
		"fallback": "teenyicons:double-caret-up-solid",
	});
}

export default Component;
