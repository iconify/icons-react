import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehoar8bab.css';
import '../../css/t/t95kfgwfc.css';
import '../../css/s/spenj8_cl.css';
import '../../css/x/xc0t7cbgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehoar8bab wm-k"/><path class="t95kfgwfc wm-k"/><path class="spenj8_cl wm-a"/><path class="wm-a xc0t7cbgj"/>`,
		"fallback": "withicons-bauhaus:calendar-check",
	});
}

export default Component;
