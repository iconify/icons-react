import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhp6qvzak.css';
import '../../css/v/vo71evf5d.css';
import '../../css/j/jsyno-bnz.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhp6qvzak"/><path class="vo71evf5d"/><path class="jsyno-bnz"/><path class="e4zfowz9r"/>`,
		"fallback": "openmoji:aquarius",
	});
}

export default Component;
