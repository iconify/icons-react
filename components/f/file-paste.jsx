import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/niz8yk-fe.css';
import '../../css/e/ei2fpxbtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="niz8yk-fe"/><path class="ei2fpxbtt"/></g>`,
		"fallback": "hugeicons:file-paste",
	});
}

export default Component;
