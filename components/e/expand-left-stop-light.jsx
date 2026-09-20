import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxl8m9b9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxl8m9b9y"/>`,
		"fallback": "lets-icons:expand-left-stop-light",
	});
}

export default Component;
