import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb-s_fb2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eb-s_fb2w"/>`,
		"fallback": "reicon:circle-arrow-right-up-filled",
	});
}

export default Component;
