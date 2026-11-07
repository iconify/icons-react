import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwmrmjbuw.css';
import '../../css/z/zgpdt1b9g.css';
import '../../css/y/ynwwsspwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwmrmjbuw"/><path class="zgpdt1b9g"/><path clip-rule="evenodd" class="ynwwsspwg"/>`,
		"fallback": "solar:battery-half-outline",
	});
}

export default Component;
