import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h71ionbqe.css';
import '../../css/z/zzq8gronk.css';
import '../../css/r/ricbakr0q.css';
import '../../css/c/ck74n8tck.css';
import '../../css/z/zyxi9sbwd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h71ionbqe"/><path class="zzq8gronk"/><path class="ricbakr0q"/><path class="ck74n8tck"/><path class="zyxi9sbwd"/></g>`,
		"fallback": "streamline-kameleon-color:beach-2-pop",
	});
}

export default Component;
