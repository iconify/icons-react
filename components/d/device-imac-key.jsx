import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adv3nryks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adv3nryks"/>`,
		"fallback": "tabler:device-imac-key",
	});
}

export default Component;
