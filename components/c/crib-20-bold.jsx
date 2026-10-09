import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzdvkjb-z.css';
import '../../css/k/ke2lxtdne.css';
import '../../css/m/m_laitx2a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzdvkjb-z"/><path class="ke2lxtdne"/><path class="m_laitx2a"/>`,
		"fallback": "energy-icons:crib-20-bold",
	});
}

export default Component;
