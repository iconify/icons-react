import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrmll9g5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrmll9g5a"/>`,
		"fallback": "keyline-icons:align-offset-right-sharp",
	});
}

export default Component;
