import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3xu5kyvp.css';
import '../../css/r/re5rgnbfo.css';
import '../../css/q/qguzlhbxh.css';
import '../../css/j/jf456eeoy.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/c/c88l71byj.css';
import '../../css/x/xrhnvkx6q.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3xu5kyvp"/><path clip-rule="evenodd" class="re5rgnbfo"/><path clip-rule="evenodd" class="qguzlhbxh"/><path clip-rule="evenodd" class="jf456eeoy"/><g class="jn8qy4bru"><path class="c88l71byj"/><path class="xrhnvkx6q"/></g>`,
		"fallback": "openmoji:edge",
	});
}

export default Component;
