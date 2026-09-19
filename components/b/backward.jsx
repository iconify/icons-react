import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk3anbc7y.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vk3anbc7y"/>`,
		"fallback": "f7:backward",
	});
}

export default Component;
