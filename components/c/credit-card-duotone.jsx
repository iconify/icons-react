import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/beoipcbng.css';
import '../../css/t/tba9ohb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="beoipcbng"/><path class="tba9ohb5t"/>`,
		"fallback": "stash:credit-card-duotone",
	});
}

export default Component;
