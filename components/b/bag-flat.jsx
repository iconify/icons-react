import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyca08b6v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eyca08b6v"/>`,
		"fallback": "streamline-flex-color:bag-flat",
	});
}

export default Component;
