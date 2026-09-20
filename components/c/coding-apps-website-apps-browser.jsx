import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/roh8lacsx.css';
import '../../css/c/cd-p8trqt.css';
import '../../css/v/vi194-b2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="roh8lacsx"/><path class="cd-p8trqt"/><path class="vi194-b2e"/></g>`,
		"fallback": "streamline-ultimate:coding-apps-website-apps-browser",
	});
}

export default Component;
