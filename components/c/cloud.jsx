import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb_kh08lj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb_kh08lj"/>`,
		"fallback": "feather:cloud",
	});
}

export default Component;
