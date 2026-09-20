import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bigwdsbpk.css';
import '../../css/y/yjtz3ka2h.css';
import '../../css/h/h5bp3ks6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bigwdsbpk"/><path class="yjtz3ka2h"/><path class="h5bp3ks6u"/></g>`,
		"fallback": "mynaui:image-rectangle",
	});
}

export default Component;
