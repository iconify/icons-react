import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shbgs2bdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="shbgs2bdy"/>`,
		"fallback": "streamline-sharp:double-bookmark-remix",
	});
}

export default Component;
