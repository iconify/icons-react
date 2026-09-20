import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur4f7_bnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur4f7_bnm"/>`,
		"fallback": "tabler:circle-caret-up-filled",
	});
}

export default Component;
