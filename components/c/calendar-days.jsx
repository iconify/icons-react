import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehoar8bab.css';
import '../../css/t/t95kfgwfc.css';
import '../../css/s/spenj8_cl.css';
import '../../css/d/dlf36tvcz.css';
import '../../css/t/ttgkzvbby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehoar8bab wm-k"/><path class="t95kfgwfc wm-k"/><path class="spenj8_cl wm-a"/><path class="dlf36tvcz wm-a"/><path class="ttgkzvbby wm-a"/>`,
		"fallback": "withicons-bauhaus:calendar-days",
	});
}

export default Component;
