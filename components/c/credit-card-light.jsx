import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/roquk4b2w.css';
import '../../css/l/llud87bwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="roquk4b2w"/><path class="llud87bwk"/>`,
		"fallback": "stash:credit-card-light",
	});
}

export default Component;
