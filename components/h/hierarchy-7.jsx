import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g9n1363wd.css';
import '../../css/t/tw39ay8jf.css';
import '../../css/e/etsv_nb6b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g9n1363wd"/><path class="tw39ay8jf"/><path class="etsv_nb6b"/></g>`,
		"fallback": "streamline-color:hierarchy-7",
	});
}

export default Component;
