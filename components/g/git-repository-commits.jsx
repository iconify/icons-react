import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07tmccvv.css';
import '../../css/f/fxuspib9g.css';
import '../../css/s/svp7he8me.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p07tmccvv"><path class="fxuspib9g"/><path class="svp7he8me"/></g>`,
		"fallback": "tdesign:git-repository-commits",
	});
}

export default Component;
