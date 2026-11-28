import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfcci4bhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfcci4bhq"/>`,
		"fallback": "noviair-light:dice",
	});
}

export default Component;
