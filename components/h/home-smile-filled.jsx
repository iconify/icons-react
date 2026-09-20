import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggzbzm6kg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ggzbzm6kg"/>`,
		"fallback": "reicon:home-smile-filled",
	});
}

export default Component;
