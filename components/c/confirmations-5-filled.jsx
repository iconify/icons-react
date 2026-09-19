import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmf71jbnp.css';
import '../../css/d/d6aw1qt_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmf71jbnp"/><path clip-rule="evenodd" class="d6aw1qt_a"/>`,
		"fallback": "bitcoin-icons:confirmations-5-filled",
	});
}

export default Component;
