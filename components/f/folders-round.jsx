import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krh1u2c3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krh1u2c3e"/>`,
		"fallback": "coolicons:folders-round",
	});
}

export default Component;
