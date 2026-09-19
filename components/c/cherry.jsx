import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/e/ed99izbsd.css';
import '../../css/r/rdbckxo8s.css';
import '../../css/j/jm6531b2w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><circle class="ed99izbsd"/><circle class="rdbckxo8s"/><path class="jm6531b2w"/></g>`,
		"fallback": "icon-park-outline:cherry",
	});
}

export default Component;
