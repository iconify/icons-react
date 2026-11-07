import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-mexebzb.css';
import '../../css/n/nbkh3ubia.css';
import '../../css/a/abgizhdkn.css';
import '../../css/b/bvct38blc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-mexebzb"/><path class="nbkh3ubia"/><path class="abgizhdkn"/><path class="bvct38blc"/>`,
		"fallback": "solar:grid-2x2-bold",
	});
}

export default Component;
