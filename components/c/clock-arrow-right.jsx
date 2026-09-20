import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ucs7_ohzj.css';
import '../../css/o/oa_igybyi.css';
import '../../css/n/nzlt59bqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ucs7_ohzj"/><path class="oa_igybyi"/><path class="nzlt59bqf"/></g>`,
		"fallback": "lucide:clock-arrow-right",
	});
}

export default Component;
