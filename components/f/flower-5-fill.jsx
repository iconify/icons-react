import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdf3tlb6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zdf3tlb6w"/>`,
		"fallback": "mingcute:flower-5-fill",
	});
}

export default Component;
