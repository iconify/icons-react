import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/soz8xib7o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="soz8xib7o"/>`,
		"fallback": "heroicons-solid:home",
	});
}

export default Component;
