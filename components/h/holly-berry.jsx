import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz-e9hbgp.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz-e9hbgp"/>`,
		"fallback": "fa7-solid:holly-berry",
	});
}

export default Component;
