import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0gc6gddm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o0gc6gddm"/>`,
		"fallback": "teenyicons:align-text-center-solid",
	});
}

export default Component;
