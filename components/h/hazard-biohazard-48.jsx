import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azssgq8vo.css';
import '../../css/o/ob614rkil.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azssgq8vo"/><path class="ob614rkil"/>`,
		"fallback": "energy-icons:hazard-biohazard-48",
	});
}

export default Component;
