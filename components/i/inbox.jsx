import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0hon6-9l.css';
import '../../css/h/ht7052bix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0hon6-9l"/><path class="ht7052bix"/>`,
		"fallback": "stash:inbox",
	});
}

export default Component;
