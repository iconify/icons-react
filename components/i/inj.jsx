import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4vb3mbqk.css';
import '../../css/o/ol95ujbyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4vb3mbqk"/><path class="ol95ujbyo"/>`,
		"fallback": "token:inj",
	});
}

export default Component;
