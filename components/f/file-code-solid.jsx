import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb7n7cbwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb7n7cbwy"/>`,
		"fallback": "iconaut:file-code-solid",
	});
}

export default Component;
