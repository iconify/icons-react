import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_vq-abkk.css';
import '../../css/i/i83sn7bif.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_vq-abkk"/><path class="i83sn7bif"/>`,
		"fallback": "flat-color-icons:high-priority",
	});
}

export default Component;
