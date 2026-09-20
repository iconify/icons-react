import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trov26bfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trov26bfw"/>`,
		"fallback": "tabler:circle-dashed-letter-k",
	});
}

export default Component;
