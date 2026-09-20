import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/styafgb6l.css';
import '../../css/h/ht6h5ebzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="styafgb6l"/><path clip-rule="evenodd" class="ht6h5ebzl"/>`,
		"fallback": "stash:data-date-light",
	});
}

export default Component;
