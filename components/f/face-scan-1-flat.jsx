import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kc2ru-i-i.css';
import '../../css/e/euquqhb2a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="kc2ru-i-i"/><path class="euquqhb2a"/></g>`,
		"fallback": "streamline-flex-color:face-scan-1-flat",
	});
}

export default Component;
