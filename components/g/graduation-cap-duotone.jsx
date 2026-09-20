import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbt72703q.css';
import '../../css/x/xofqjus7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mbt72703q"/><path class="xofqjus7b"/>`,
		"fallback": "stash:graduation-cap-duotone",
	});
}

export default Component;
