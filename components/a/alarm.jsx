import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/g/gcnxx2xsc.css';
import '../../css/z/zopjch_2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="gcnxx2xsc"/><circle class="zopjch_2q"/></g>`,
		"fallback": "lets-icons:alarm",
	});
}

export default Component;
