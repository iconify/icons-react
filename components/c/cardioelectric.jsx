import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/ryl7c4biq.css';
import '../../css/k/kx98x3blk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ryl7c4biq"/><path class="kx98x3blk"/></g>`,
		"fallback": "icon-park:cardioelectric",
	});
}

export default Component;
