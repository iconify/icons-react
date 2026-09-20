import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq3t-owyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zq3t-owyz"/>`,
		"fallback": "streamline-sharp:border-bottom-solid",
	});
}

export default Component;
