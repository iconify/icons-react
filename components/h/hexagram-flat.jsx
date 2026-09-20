import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba9vtwbvl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ba9vtwbvl"/>`,
		"fallback": "streamline-color:hexagram-flat",
	});
}

export default Component;
