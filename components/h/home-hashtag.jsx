import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/utgs_bbxu.css';
import '../../css/v/vzeg9ib-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="utgs_bbxu"/><path class="vzeg9ib-l"/></g>`,
		"fallback": "reicon:home-hashtag",
	});
}

export default Component;
