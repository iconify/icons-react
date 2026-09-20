import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnm9yk__a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnm9yk__a"/>`,
		"fallback": "keyline-icons:download-sharp",
	});
}

export default Component;
