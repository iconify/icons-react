import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk7jnxtbu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vk7jnxtbu"/>`,
		"fallback": "lsicon:adjust-hight-outline",
	});
}

export default Component;
