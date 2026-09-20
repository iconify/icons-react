import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob3ob_h0s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ob3ob_h0s"/>`,
		"fallback": "streamline-plump:arrow-curvy-both-direction-2-solid",
	});
}

export default Component;
