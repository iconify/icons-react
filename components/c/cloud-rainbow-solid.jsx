import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvlhw2b1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvlhw2b1w"/>`,
		"fallback": "iconaut:cloud-rainbow-solid",
	});
}

export default Component;
