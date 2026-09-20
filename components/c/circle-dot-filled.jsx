import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpuxyac7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpuxyac7l"/>`,
		"fallback": "tabler:circle-dot-filled",
	});
}

export default Component;
