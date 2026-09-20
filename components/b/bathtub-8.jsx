import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/z/zhtvj7bsl.css';
import '../../css/h/h6i_htcam.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="zhtvj7bsl"/><path class="h6i_htcam"/></g>`,
		"fallback": "marketeq:bathtub-8",
	});
}

export default Component;
