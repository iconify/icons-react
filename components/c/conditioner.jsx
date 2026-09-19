import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/zq6a9-byn.css';
import '../../css/m/mt6dlxb6n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="zq6a9-byn"/><path class="mt6dlxb6n"/></g>`,
		"fallback": "icon-park-outline:conditioner",
	});
}

export default Component;
