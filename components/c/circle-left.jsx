import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/b/ba_vn-w1a.css';
import '../../css/h/hp4v6yboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="ba_vn-w1a"/><path class="hp4v6yboc"/></g>`,
		"fallback": "lets-icons:circle-left",
	});
}

export default Component;
