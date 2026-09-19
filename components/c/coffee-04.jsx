import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymwnz6xdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymwnz6xdw"/>`,
		"fallback": "hugeicons:coffee-04",
	});
}

export default Component;
