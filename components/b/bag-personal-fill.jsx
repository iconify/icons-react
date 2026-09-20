import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzcrxfb4i.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzcrxfb4i"/>`,
		"fallback": "memory:bag-personal-fill",
	});
}

export default Component;
