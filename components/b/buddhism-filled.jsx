import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbnf9-bmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbnf9-bmr"/>`,
		"fallback": "boxicons:buddhism-filled",
	});
}

export default Component;
