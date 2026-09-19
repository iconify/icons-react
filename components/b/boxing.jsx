import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/e/e4x6eqq0d.css';
import '../../css/n/nix0j7bwb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="e4x6eqq0d"/><path class="nix0j7bwb"/><line x1="11" x2="11" y1="14" y2="22"/></g>`,
		"fallback": "icon-park:boxing",
	});
}

export default Component;
