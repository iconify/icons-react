import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/roiy15max.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="roiy15max"/>`,
		"fallback": "streamline-flex:full-screen-osx-remix",
	});
}

export default Component;
