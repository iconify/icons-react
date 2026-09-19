import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjven60rw.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjven60rw"/>`,
		"fallback": "dinkie-icons:five-of-circles-mahjong-filled",
	});
}

export default Component;
