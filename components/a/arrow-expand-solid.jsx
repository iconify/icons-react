import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aet0isvzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aet0isvzr"/>`,
		"fallback": "streamline-sharp:arrow-expand-solid",
	});
}

export default Component;
