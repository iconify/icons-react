import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyuoiib2w.css';
import '../../css/b/b6kmhlhnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyuoiib2w"/><path clip-rule="evenodd" class="b6kmhlhnd"/>`,
		"fallback": "bitcoin-icons:confirmations-1-filled",
	});
}

export default Component;
