import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t_9g49b4u.css';
import '../../css/m/md286fbip.css';
import '../../css/a/ar2it4bxe.css';
import '../../css/t/twqas9b8h.css';
import '../../css/e/e07c_kbmv.css';
import '../../css/k/kd-8hzurr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="t_9g49b4u"/><g class="md286fbip"><path class="ar2it4bxe"/><path class="twqas9b8h"/><path class="e07c_kbmv"/><path class="kd-8hzurr"/></g></g>`,
		"fallback": "cryptocurrency-color:etc",
	});
}

export default Component;
