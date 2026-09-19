import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m153w7bes.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m153w7bes"/>`,
		"fallback": "fa6-solid:backward-step",
	});
}

export default Component;
