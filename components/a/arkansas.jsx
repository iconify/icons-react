import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orab6o7kq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orab6o7kq"/>`,
		"fallback": "pinhead:arkansas",
	});
}

export default Component;
