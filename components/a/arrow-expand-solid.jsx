import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng_2knrqu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ng_2knrqu"/>`,
		"fallback": "streamline:arrow-expand-solid",
	});
}

export default Component;
