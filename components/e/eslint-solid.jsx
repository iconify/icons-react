import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4hduvb-v.css';
import '../../css/p/ppwhpebbe.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4hduvb-v"/><path clip-rule="evenodd" class="ppwhpebbe"/>`,
		"fallback": "teenyicons:eslint-solid",
	});
}

export default Component;
