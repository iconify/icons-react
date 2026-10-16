import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyz37m_ko.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyz37m_ko"/>`,
		"fallback": "energy-icons:chart-funnel-20",
	});
}

export default Component;
