import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lr_5gbo5a.css';
import '../../css/q/qj9kuabzc.css';
import '../../css/d/d5qwpt3kx.css';
import '../../css/i/i37yl4fkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lr_5gbo5a"/><path class="qj9kuabzc"/><path class="d5qwpt3kx"/><path class="i37yl4fkl"/></g>`,
		"fallback": "lucide:brain-off",
	});
}

export default Component;
