import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slzdijbqw.css';
import '../../css/p/pcxoghbnz.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slzdijbqw"/><path class="pcxoghbnz"/>`,
		"fallback": "fxemoji:fistedhand",
	});
}

export default Component;
