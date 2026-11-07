import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlx90jb3u.css';
import '../../css/x/x3ekvxvds.css';
import '../../css/e/eo14_jw6u.css';
import '../../css/c/cusbmcc7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlx90jb3u"/><path clip-rule="evenodd" class="x3ekvxvds"/><path class="eo14_jw6u"/><path class="cusbmcc7u"/>`,
		"fallback": "solar:camera-minimalistic-bold-duotone",
	});
}

export default Component;
