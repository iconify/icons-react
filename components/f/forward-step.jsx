import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqw4fpf6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kqw4fpf6w"/>`,
		"fallback": "reicon:forward-step",
	});
}

export default Component;
