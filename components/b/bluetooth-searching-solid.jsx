import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v11pwac-i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v11pwac-i"/>`,
		"fallback": "streamline:bluetooth-searching-solid",
	});
}

export default Component;
