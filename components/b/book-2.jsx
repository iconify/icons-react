import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxl51xg6q.css';
import '../../css/e/eruok2ino.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer yxl51xg6q"/><path class="duoicon-primary-layer eruok2ino"/>`,
		"fallback": "duo-icons:book-2",
	});
}

export default Component;
