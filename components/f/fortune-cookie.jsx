import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/znj1-tyyg.css';
import '../../css/u/ukwmuib7w.css';
import '../../css/c/cjhwub58j.css';
import '../../css/h/hcq4uzr_b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="znj1-tyyg"/><path class="ukwmuib7w"/><path class="cjhwub58j"/><path class="hcq4uzr_b"/></g>`,
		"fallback": "fluent-emoji-flat:fortune-cookie",
	});
}

export default Component;
