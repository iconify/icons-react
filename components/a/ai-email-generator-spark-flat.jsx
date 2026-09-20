import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nxn8t8but.css';
import '../../css/v/v3qr22bmj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nxn8t8but"/><path class="v3qr22bmj"/></g>`,
		"fallback": "streamline-color:ai-email-generator-spark-flat",
	});
}

export default Component;
