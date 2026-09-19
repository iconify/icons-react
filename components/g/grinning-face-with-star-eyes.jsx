import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv035x6ue.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kv035x6ue"/>`,
		"fallback": "dinkie-icons:grinning-face-with-star-eyes",
	});
}

export default Component;
