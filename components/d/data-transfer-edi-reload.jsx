import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdja74b3x.css';
import '../../css/t/tb44rwbpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdja74b3x"/><path class="tb44rwbpx"/>`,
		"fallback": "streamline-freehand:data-transfer-edi-reload",
	});
}

export default Component;
