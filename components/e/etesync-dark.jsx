import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebjj2yi8t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebjj2yi8t"/>`,
		"fallback": "selfhst:etesync-dark",
	});
}

export default Component;
