import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dotcomb2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dotcomb2a"/>`,
		"fallback": "streamline-sharp:facebook-logo-1-remix",
	});
}

export default Component;
