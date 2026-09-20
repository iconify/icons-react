import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq3zk27rk.css';
import '../../css/h/hlp216lkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq3zk27rk"/><path class="hlp216lkb"/>`,
		"fallback": "stash:espiral-book-solid",
	});
}

export default Component;
