import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krwo12_et.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krwo12_et"/>`,
		"fallback": "boxicons:circle-outer-dashed-circle-filled",
	});
}

export default Component;
