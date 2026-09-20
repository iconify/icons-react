import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj_4nmmiy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oj_4nmmiy"/>`,
		"fallback": "streamline:arrow-curvy-up-down-2-solid",
	});
}

export default Component;
