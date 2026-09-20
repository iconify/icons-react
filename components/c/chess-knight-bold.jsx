import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bue0nsb5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bue0nsb5w"/>`,
		"fallback": "streamline-ultimate:chess-knight-bold",
	});
}

export default Component;
