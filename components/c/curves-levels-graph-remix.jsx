import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj8vb7r2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dj8vb7r2a"/>`,
		"fallback": "streamline-sharp:curves-levels-graph-remix",
	});
}

export default Component;
