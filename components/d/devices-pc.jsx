import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm26mpbku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fm26mpbku"/>`,
		"fallback": "tabler:devices-pc",
	});
}

export default Component;
