import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gom9ftplv.css';
import '../../css/b/b38w9dwka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gom9ftplv"/><path class="b38w9dwka"/></g>`,
		"fallback": "tabler:brand-wechat",
	});
}

export default Component;
