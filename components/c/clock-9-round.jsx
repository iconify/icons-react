import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zik2nzbui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zik2nzbui"/>`,
		"fallback": "coolicons:clock-9-round",
	});
}

export default Component;
