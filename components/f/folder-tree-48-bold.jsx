import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cws-8tb1t.css';
import '../../css/a/aktl5czru.css';
import '../../css/m/m86vp2brb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cws-8tb1t"/><path class="aktl5czru"/><path class="m86vp2brb"/>`,
		"fallback": "energy-icons:folder-tree-48-bold",
	});
}

export default Component;
