import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyef6ab9k.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyef6ab9k"/>`,
		"fallback": "fa6-brands:fulcrum",
	});
}

export default Component;
