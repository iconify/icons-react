import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghwudhkpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghwudhkpk"/>`,
		"fallback": "tabler:crop-3-2-filled",
	});
}

export default Component;
