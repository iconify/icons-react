import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cm53y-svw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cm53y-svw"/>`,
		"fallback": "coolicons:flag-fill-round",
	});
}

export default Component;
