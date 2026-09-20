import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t95xj-bfg.css';
import '../../css/s/s-xmkv83b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t95xj-bfg"/><path class="s-xmkv83b"/></g>`,
		"fallback": "streamline-ultimate:coding-apps-website-detect-virus-monitor-search",
	});
}

export default Component;
