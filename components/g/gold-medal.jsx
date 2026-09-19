import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iojc3c5mq.css';
import '../../css/h/h-mv3pyqd.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iojc3c5mq"/><path class="h-mv3pyqd"/>`,
		"fallback": "ep:gold-medal",
	});
}

export default Component;
