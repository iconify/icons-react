import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/os9vfvbwc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="os9vfvbwc"/>`,
		"fallback": "streamline-flex:bag-suitcase-4-solid",
	});
}

export default Component;
