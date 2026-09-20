import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbz_vebym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xbz_vebym"/>`,
		"fallback": "streamline-sharp-color:gender-lesbian-2-flat",
	});
}

export default Component;
