import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1m2d1byj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g1m2d1byj"/>`,
		"fallback": "streamline-flex:add-to-playlist-remix",
	});
}

export default Component;
