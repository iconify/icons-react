import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va8ywzbbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="va8ywzbbl"/>`,
		"fallback": "tabler:brand-messenger-filled",
	});
}

export default Component;
