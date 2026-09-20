import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyz20i6jm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tyz20i6jm"/>`,
		"fallback": "streamline:graph-arrow-decrease-solid",
	});
}

export default Component;
