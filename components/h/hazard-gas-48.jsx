import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azssgq8vo.css';
import '../../css/o/oqha46qhl.css';
import '../../css/d/d4o-fcjig.css';
import '../../css/s/sjl0glo2d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azssgq8vo"/><path class="oqha46qhl"/><path class="d4o-fcjig"/><path class="sjl0glo2d"/>`,
		"fallback": "energy-icons:hazard-gas-48",
	});
}

export default Component;
