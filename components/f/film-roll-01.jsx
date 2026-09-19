import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/q/qj6gnaban.css';
import '../../css/w/w8b1rkbha.css';
import '../../css/u/uy7cb6bch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="qj6gnaban"/><path class="w8b1rkbha"/><path class="uy7cb6bch"/></g>`,
		"fallback": "hugeicons:film-roll-01",
	});
}

export default Component;
