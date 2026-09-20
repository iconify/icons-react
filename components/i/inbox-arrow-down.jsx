import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yrdu6rmcg.css';
import '../../css/b/b3a367s2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yrdu6rmcg"/><path class="b3a367s2p"/></g>`,
		"fallback": "reicon:inbox-arrow-down",
	});
}

export default Component;
