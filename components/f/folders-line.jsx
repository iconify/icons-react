import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/l/ldocbeb6f.css';
import '../../css/a/ao01edcje.css';
import '../../css/p/pag9h1bav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="ldocbeb6f"/><path class="ao01edcje"/><path class="pag9h1bav"/></g>`,
		"fallback": "lets-icons:folders-line",
	});
}

export default Component;
