import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/keyan4-_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="keyan4-_g"/>`,
		"fallback": "tabler:ballpen-filled",
	});
}

export default Component;
