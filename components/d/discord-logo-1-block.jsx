import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arr7c3bgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="arr7c3bgq"/>`,
		"fallback": "streamline-logos:discord-logo-1-block",
	});
}

export default Component;
