import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3att8bhb.css';
import '../../css/s/s2tkiab1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3att8bhb"/><path class="s2tkiab1n"/>`,
		"fallback": "tdesign:chart-stacked-filled",
	});
}

export default Component;
