import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg7wyab-l.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tg7wyab-l"/>`,
		"fallback": "fa6-solid:grip",
	});
}

export default Component;
