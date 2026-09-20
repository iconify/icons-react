import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xh006wbmj.css';
import '../../css/a/avoltjbjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xh006wbmj"/><rect class="avoltjbjo"/></g>`,
		"fallback": "lucide:gamepad",
	});
}

export default Component;
