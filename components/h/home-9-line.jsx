import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg94i5mch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg94i5mch"/>`,
		"fallback": "ri:home-9-line",
	});
}

export default Component;
