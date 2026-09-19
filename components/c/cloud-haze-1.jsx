import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyp7lccqp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyp7lccqp"/>`,
		"fallback": "bi:cloud-haze-1",
	});
}

export default Component;
