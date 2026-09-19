import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2k_9ab2j.css';
import '../../css/b/bfvbc4b-j.css';
import '../../css/h/hz6ugwsiz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2k_9ab2j"/><path class="bfvbc4b-j"/><path class="hz6ugwsiz"/>`,
		"fallback": "carbon:id",
	});
}

export default Component;
