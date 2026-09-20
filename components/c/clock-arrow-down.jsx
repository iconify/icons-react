import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ucs7_ohzj.css';
import '../../css/b/bjbh1koxw.css';
import '../../css/l/lfhzl7dxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ucs7_ohzj"/><path class="bjbh1koxw"/><path class="lfhzl7dxx"/></g>`,
		"fallback": "lucide:clock-arrow-down",
	});
}

export default Component;
