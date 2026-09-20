import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssjb5oo1j.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssjb5oo1j"/>`,
		"fallback": "memory:border-top",
	});
}

export default Component;
