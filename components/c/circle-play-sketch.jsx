import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/us4l7n-bh.css';
import '../../css/v/v4goc3b9j.css';
import '../../css/t/th46yjuif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="us4l7n-bh"/><path class="v4goc3b9j wm-k"/><path class="th46yjuif wm-a"/></g>`,
		"fallback": "withicons:circle-play-sketch",
	});
}

export default Component;
