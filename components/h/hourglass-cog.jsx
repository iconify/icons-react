import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qodibq75g.css';
import '../../css/b/b2kz-54-v.css';
import '../../css/e/ez1x61b2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qodibq75g"/><path class="b2kz-54-v"/><circle class="ez1x61b2a"/></g>`,
		"fallback": "lucide:hourglass-cog",
	});
}

export default Component;
