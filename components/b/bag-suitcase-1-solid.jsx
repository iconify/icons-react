import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_8dtvb-v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e_8dtvb-v"/>`,
		"fallback": "streamline:bag-suitcase-1-solid",
	});
}

export default Component;
