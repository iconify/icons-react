import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-bf3xbdx.css';
import '../../css/z/zmolltb3u.css';
import '../../css/a/a_mixmbdb.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-bf3xbdx"/><path class="zmolltb3u"/><path class="a_mixmbdb"/>`,
		"fallback": "flag:es-pv-4x3",
	});
}

export default Component;
