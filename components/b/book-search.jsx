import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lfq1n-bel.css';
import '../../css/q/qqg6zzx6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lfq1n-bel"/><path class="qqg6zzx6i"/></g>`,
		"fallback": "streamline-ultimate:book-search",
	});
}

export default Component;
