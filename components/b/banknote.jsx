import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/g/g5zq04b3u.css';
import '../../css/z/zdu34pbgi.css';
import '../../css/b/bbj5cibiu.css';
import '../../css/g/g_3i-5a_q.css';
import '../../css/o/op091ia4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="g5zq04b3u"/><path class="wm-shine zdu34pbgi"/><path class="bbj5cibiu wm-k"/><path class="g_3i-5a_q wm-a"/><path class="op091ia4u wm-deco"/></g>`,
		"fallback": "withicons-kawaii:banknote",
	});
}

export default Component;
