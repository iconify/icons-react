import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/b/b1jpqqbox.css';
import '../../css/y/yfuxcacdn.css';
import '../../css/h/htije8rue.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="b1jpqqbox"/><path class="yfuxcacdn"/><path class="htije8rue"/></g>`,
		"fallback": "icon-park-outline:auto-line-width",
	});
}

export default Component;
