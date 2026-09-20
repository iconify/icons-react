import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yh600je_f.css';
import '../../css/g/geahk8b4y.css';
import '../../css/b/b8psmlbqi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yh600je_f"/><path class="geahk8b4y"/><path class="b8psmlbqi"/></g>`,
		"fallback": "streamline-flex-color:baggage",
	});
}

export default Component;
