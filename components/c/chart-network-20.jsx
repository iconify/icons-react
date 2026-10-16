import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5-m_mbgb.css';
import '../../css/i/i68tsac5f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5-m_mbgb"/><path class="i68tsac5f"/>`,
		"fallback": "energy-icons:chart-network-20",
	});
}

export default Component;
