import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcd30o47p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcd30o47p"/>`,
		"fallback": "streamline-ultimate:amusement-park-balloon-bold",
	});
}

export default Component;
