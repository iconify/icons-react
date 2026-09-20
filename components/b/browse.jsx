import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kgoytn7ay.css';
import '../../css/v/vyj6x83we.css';
import '../../css/n/n640z91ql.css';
import '../../css/h/hwe3wrb-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kgoytn7ay"/><path class="vyj6x83we"/><path class="n640z91ql"/><path class="hwe3wrb-a"/></g>`,
		"fallback": "tdesign:browse",
	});
}

export default Component;
