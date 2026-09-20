import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zj1_wemjt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zj1_wemjt"/>`,
		"fallback": "streamline:cellular-network-4g-solid",
	});
}

export default Component;
