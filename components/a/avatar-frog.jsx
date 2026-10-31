import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/m/ml0cd1oob.css';
import '../../css/a/a-s_v3w7y.css';
import '../../css/i/i6yp93bst.css';
import '../../css/j/j9br22bqu.css';
import '../../css/v/vjr8b9jwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ml0cd1oob"/><path class="a-s_v3w7y wm-shine"/><path class="i6yp93bst wm-k"/><path class="j9br22bqu wm-a"/><path class="vjr8b9jwh wm-deco"/></g>`,
		"fallback": "withicons-kawaii:avatar-frog",
	});
}

export default Component;
