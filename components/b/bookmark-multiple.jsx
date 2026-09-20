import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/g/gki_om-av.css';
import '../../css/g/g1zw6acal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="gki_om-av"/><path class="g1zw6acal"/></g>`,
		"fallback": "proicons:bookmark-multiple",
	});
}

export default Component;
