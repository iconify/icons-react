import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/kcjio60yp.css';
import '../../css/n/n5qkwpbqm.css';
import '../../css/e/e70fzccye.css';
import '../../css/e/ee-mcyhiw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="kcjio60yp"/><path class="n5qkwpbqm"/><path class="e70fzccye"/><path class="ee-mcyhiw"/></g>`,
		"fallback": "streamline-plump-color:arrow-roadmap",
	});
}

export default Component;
