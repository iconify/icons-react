import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/o/ozj6j1biz.css';
import '../../css/p/p7nzrhhjr.css';
import '../../css/k/kjzog8teo.css';
import '../../css/k/kjdsa22ry.css';
import '../../css/f/fei7d0php.css';
import '../../css/c/c48gtob-y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="ozj6j1biz"/><path class="p7nzrhhjr"/><path class="kjzog8teo"/><path class="kjdsa22ry"/><path class="fei7d0php"/><path class="c48gtob-y"/></g>`,
		"fallback": "icon-park-solid:in-flight",
	});
}

export default Component;
