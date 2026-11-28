import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-r4xjb6m.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fl-0a40mh.css';
import '../../css/y/yz2qrhb-p.css';
import '../../css/u/um_7tjb3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary v-r4xjb6m"/><g class="dt0cm9dhy primary"><path class="fl-0a40mh"/><path class="yz2qrhb-p"/><path class="um_7tjb3r"/></g>`,
		"fallback": "iconaut:folder-cog-duo",
	});
}

export default Component;
