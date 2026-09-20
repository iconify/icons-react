import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/weui-8b0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="weui-8b0f"/>`,
		"fallback": "nrk:arrow-turn-up-right-expressive",
	});
}

export default Component;
