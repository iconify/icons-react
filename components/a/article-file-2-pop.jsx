import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/li9c3kb4f.css';
import '../../css/q/q1jda8bys.css';
import '../../css/t/tjdjewb6v.css';
import '../../css/p/p0tgu9bvr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="li9c3kb4f"/><path class="q1jda8bys"/><path class="tjdjewb6v"/><path class="p0tgu9bvr"/></g>`,
		"fallback": "streamline-kameleon-color:article-file-2-pop",
	});
}

export default Component;
