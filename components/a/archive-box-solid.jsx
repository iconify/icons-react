import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azo4x4paw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="azo4x4paw"/>`,
		"fallback": "streamline:archive-box-solid",
	});
}

export default Component;
