import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qrigulbqv.css';
import '../../css/k/kf0ax4-4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qrigulbqv"/><path class="kf0ax4-4w"/></g>`,
		"fallback": "keyline-icons:door-duotone",
	});
}

export default Component;
