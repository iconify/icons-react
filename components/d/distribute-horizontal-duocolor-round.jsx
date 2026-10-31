import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ou8j9pw5a.css';
import '../../css/k/kfoljqdny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ou8j9pw5a"/><path class="kfoljqdny"/></g>`,
		"fallback": "coolicons:distribute-horizontal-duocolor-round",
	});
}

export default Component;
