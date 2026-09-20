import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b16pw7s_v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b16pw7s_v"/>`,
		"fallback": "pinhead:coughing-face-in-circle-outline",
	});
}

export default Component;
