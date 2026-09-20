import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu7v-1qzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cu7v-1qzw"/>`,
		"fallback": "simple-icons:genius",
	});
}

export default Component;
