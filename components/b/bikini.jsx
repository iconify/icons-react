import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g_df75hha.css';
import '../../css/s/srneyccdx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g_df75hha"/><path class="srneyccdx"/></g>`,
		"fallback": "fluent-emoji-flat:bikini",
	});
}

export default Component;
