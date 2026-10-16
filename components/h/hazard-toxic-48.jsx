import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azssgq8vo.css';
import '../../css/b/b6p4-fb1s.css';
import '../../css/f/fuuzkap4n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azssgq8vo"/><path class="b6p4-fb1s"/><path class="fuuzkap4n"/>`,
		"fallback": "energy-icons:hazard-toxic-48",
	});
}

export default Component;
