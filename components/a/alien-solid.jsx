import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyj8jf1aw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fyj8jf1aw"/>`,
		"fallback": "teenyicons:alien-solid",
	});
}

export default Component;
