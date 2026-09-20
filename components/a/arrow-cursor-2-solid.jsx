import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eipldir_m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eipldir_m"/>`,
		"fallback": "streamline:arrow-cursor-2-solid",
	});
}

export default Component;
