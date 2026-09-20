import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n6v75b2-j.css';
import '../../css/n/nb1e76c9o.css';
import '../../css/m/m7inagr1t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n6v75b2-j"/><path class="nb1e76c9o"/><path class="m7inagr1t"/></g>`,
		"fallback": "streamline-color:chicken-grilled-stream-flat",
	});
}

export default Component;
