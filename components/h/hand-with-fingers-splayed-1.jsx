import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zymf_u6-e.css';
import '../../css/d/dfb_70snl.css';
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
		"content": `<path class="zymf_u6-e"/><path class="dfb_70snl"/><path class="p1y1we2cu"/><path class="ujbdo19su"/><path class="uymgdabjo"/>`,
		"fallback": "streamline-emojis:hand-with-fingers-splayed-1",
	});
}

export default Component;
