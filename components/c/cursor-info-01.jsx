import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2_m_eb-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2_m_eb-g"/>`,
		"fallback": "hugeicons:cursor-info-01",
	});
}

export default Component;
