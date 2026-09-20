import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6on6gbxr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z6on6gbxr"/>`,
		"fallback": "teenyicons:border-inner-solid",
	});
}

export default Component;
