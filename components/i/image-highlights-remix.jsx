import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cch0s05jp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cch0s05jp"/>`,
		"fallback": "streamline-sharp:image-highlights-remix",
	});
}

export default Component;
