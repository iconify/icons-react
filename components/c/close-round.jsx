import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqn4ig7kg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqn4ig7kg"/>`,
		"fallback": "coolicons:close-round",
	});
}

export default Component;
