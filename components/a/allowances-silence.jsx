import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emd2fydgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="emd2fydgu"/>`,
		"fallback": "streamline-freehand:allowances-silence",
	});
}

export default Component;
