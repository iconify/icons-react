import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-n22ftkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-n22ftkh"/>`,
		"fallback": "coolicons:bold-fill-round",
	});
}

export default Component;
