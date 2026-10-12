import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2v6vtbhe.css';
import '../../css/j/jvjk3qbkk.css';
import '../../css/h/h96qerq4e.css';
import '../../css/s/sinjhb0df.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2v6vtbhe"/><path class="jvjk3qbkk"/><path class="h96qerq4e"/><path class="sinjhb0df"/>`,
		"fallback": "energy-icons:crutch-20",
	});
}

export default Component;
