import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/z/zeqsdgyil.css';
import '../../css/a/al9h4e17k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="zeqsdgyil"/><path class="al9h4e17k"/></g>`,
		"fallback": "streamline-plump:arrow-curvy-both-direction-2",
	});
}

export default Component;
