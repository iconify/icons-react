import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqnnjw15f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqnnjw15f"/>`,
		"fallback": "coolicons:bandage-fill-round",
	});
}

export default Component;
