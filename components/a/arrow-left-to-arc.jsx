import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lf_1wbw7v.css';
import '../../css/e/e6o90zgnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lf_1wbw7v"/><path class="e6o90zgnx"/></g>`,
		"fallback": "tabler:arrow-left-to-arc",
	});
}

export default Component;
