import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk577i3vl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk577i3vl"/>`,
		"fallback": "tabler:helicopter-landing-filled",
	});
}

export default Component;
