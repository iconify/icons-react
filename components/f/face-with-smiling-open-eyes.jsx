import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/i/i8k05e2ok.css';
import '../../css/a/akd1ysboe.css';
import '../../css/r/rynwa9bep.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="vkcj4bcdm"/><path class="i8k05e2ok"/><circle class="akd1ysboe"/><circle class="rynwa9bep"/></g>`,
		"fallback": "icon-park-outline:face-with-smiling-open-eyes",
	});
}

export default Component;
