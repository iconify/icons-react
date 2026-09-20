import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg-9lqb3k.css';
import '../../css/e/eyga40b8r.css';
import '../../css/p/p1y1we2cu.css';
import '../../css/u/ujbdo19su.css';
import '../../css/u/uymgdabjo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg-9lqb3k"/><path class="eyga40b8r"/><path class="p1y1we2cu"/><path class="ujbdo19su"/><path class="uymgdabjo"/>`,
		"fallback": "streamline-emojis:hand-with-fingers-splayed-2",
	});
}

export default Component;
