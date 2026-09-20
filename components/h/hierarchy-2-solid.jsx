import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwtsf1bcj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pwtsf1bcj"/>`,
		"fallback": "streamline:hierarchy-2-solid",
	});
}

export default Component;
