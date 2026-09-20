import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/b/bkdo0vn9i.css';
import '../../css/k/kz_vl5ant.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="bkdo0vn9i"/><path class="kz_vl5ant"/></g>`,
		"fallback": "lets-icons:blank",
	});
}

export default Component;
