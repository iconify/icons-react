import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/era_k9blm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="era_k9blm"/>`,
		"fallback": "keyline-icons:at-sharp",
	});
}

export default Component;
