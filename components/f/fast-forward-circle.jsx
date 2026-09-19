import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwibdw4bb.css';
import '../../css/y/ynj1yft6n.css';
import '../../css/x/x6pvdjbfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwibdw4bb"/><path class="ynj1yft6n"/><path class="x6pvdjbfc"/>`,
		"fallback": "boxicons:fast-forward-circle",
	});
}

export default Component;
