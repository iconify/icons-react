import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqtfli2lu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqtfli2lu"/>`,
		"fallback": "tabler:arrows-left",
	});
}

export default Component;
