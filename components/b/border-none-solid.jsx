import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqw920b4e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eqw920b4e"/>`,
		"fallback": "teenyicons:border-none-solid",
	});
}

export default Component;
