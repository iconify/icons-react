import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdm9qq6xg.css';
import '../../css/u/uuqt_yb-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdm9qq6xg"/><path class="uuqt_yb-q"/>`,
		"fallback": "prime:info-circle",
	});
}

export default Component;
