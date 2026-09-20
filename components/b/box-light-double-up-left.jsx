import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzdioebup.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzdioebup"/>`,
		"fallback": "memory:box-light-double-up-left",
	});
}

export default Component;
