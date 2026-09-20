import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v041m5b8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v041m5b8v"/>`,
		"fallback": "tdesign:add-and-subtract",
	});
}

export default Component;
