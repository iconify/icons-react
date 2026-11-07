import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/ltvp4bbbj.css';
import '../../css/r/r226xsbyq.css';
import '../../css/k/kqj26io4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ltvp4bbbj"/><path class="r226xsbyq"/><path class="kqj26io4i"/></g>`,
		"fallback": "solar:brain-linear",
	});
}

export default Component;
