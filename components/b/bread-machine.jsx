import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/z/z-hi-2qyy.css';
import '../../css/i/il3_yhf-e.css';
import '../../css/z/zkqbqgb3y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="z-hi-2qyy"/><circle class="il3_yhf-e"/><path class="zkqbqgb3y"/></g>`,
		"fallback": "icon-park-outline:bread-machine",
	});
}

export default Component;
