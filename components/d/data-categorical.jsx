import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_ejajb5v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_ejajb5v"/>`,
		"fallback": "carbon:data-categorical",
	});
}

export default Component;
