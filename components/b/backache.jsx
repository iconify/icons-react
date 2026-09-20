import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbqjoob4z.css';
import '../../css/q/qq6ksrwnd.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/v/vp9uskbgq.css';
import '../../css/g/g0aenyz-s.css';
import '../../css/f/fj34exbjx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbqjoob4z"/><path class="qq6ksrwnd"/><g class="jn8qy4bru"><path class="vp9uskbgq"/><path class="g0aenyz-s"/></g><path class="fj34exbjx"/>`,
		"fallback": "openmoji:backache",
	});
}

export default Component;
