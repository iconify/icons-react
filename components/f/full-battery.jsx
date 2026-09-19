import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shnc5m5hf.css';
import '../../css/c/cn4m4xbfq.css';
import '../../css/a/a1x6v0wfj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="shnc5m5hf"><path class="cn4m4xbfq"/><path class="a1x6v0wfj"/></g>`,
		"fallback": "flat-color-icons:full-battery",
	});
}

export default Component;
