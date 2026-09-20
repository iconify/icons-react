import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj_l_4b6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nj_l_4b6g"/>`,
		"fallback": "streamline-logos:bandcamp-logo-1-solid",
	});
}

export default Component;
