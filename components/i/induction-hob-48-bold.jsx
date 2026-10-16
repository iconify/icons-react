import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iaet4wb5s.css';
import '../../css/k/kvlw_qbpp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iaet4wb5s"/><path class="kvlw_qbpp"/>`,
		"fallback": "energy-icons:induction-hob-48-bold",
	});
}

export default Component;
