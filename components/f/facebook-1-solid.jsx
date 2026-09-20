import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgkky5bfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pgkky5bfs"/>`,
		"fallback": "streamline-sharp:facebook-1-solid",
	});
}

export default Component;
