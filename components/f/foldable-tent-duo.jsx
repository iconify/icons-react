import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3ved-ycr.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ernlo0b2m.css';
import '../../css/z/zkty8cyln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary x3ved-ycr"/><g class="dt0cm9dhy primary"><path class="ernlo0b2m"/><path class="zkty8cyln"/></g>`,
		"fallback": "iconaut:foldable-tent-duo",
	});
}

export default Component;
