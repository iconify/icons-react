import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqk-lo6pz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqk-lo6pz"/>`,
		"fallback": "cib:airbnb",
	});
}

export default Component;
