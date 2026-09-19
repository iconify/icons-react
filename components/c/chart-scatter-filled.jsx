import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv82l7bbi.css';
import '../../css/m/mfunvdbxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv82l7bbi"/><path class="mfunvdbxg"/>`,
		"fallback": "boxicons:chart-scatter-filled",
	});
}

export default Component;
