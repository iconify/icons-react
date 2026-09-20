import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1fanqb7g.css';
import '../../css/h/hxd1rr2uo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1fanqb7g"/><path class="hxd1rr2uo"/>`,
		"fallback": "token:grs",
	});
}

export default Component;
