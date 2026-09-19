import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwlb4kd2r.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwlb4kd2r"/>`,
		"fallback": "fluent-mdl2:add-favorite",
	});
}

export default Component;
