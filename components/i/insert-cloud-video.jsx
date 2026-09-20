import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tonlp_bxm.css';
import '../../css/z/zac3mgbdy.css';
import '../../css/o/o4a6nzb5i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tonlp_bxm"/><path class="zac3mgbdy"/><path class="o4a6nzb5i"/></g>`,
		"fallback": "streamline-color:insert-cloud-video",
	});
}

export default Component;
