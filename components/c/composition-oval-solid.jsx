import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aeb5a4lfl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aeb5a4lfl"/>`,
		"fallback": "streamline:composition-oval-solid",
	});
}

export default Component;
