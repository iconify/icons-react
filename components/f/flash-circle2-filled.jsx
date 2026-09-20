import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/retbqifwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="retbqifwo"/>`,
		"fallback": "reicon:flash-circle2-filled",
	});
}

export default Component;
