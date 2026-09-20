import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytcirkb0g.css';
import '../../css/n/nctt2tb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytcirkb0g"/><path class="nctt2tb9y"/>`,
		"fallback": "stash:image-arrow-down-light",
	});
}

export default Component;
