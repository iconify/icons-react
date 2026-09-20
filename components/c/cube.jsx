import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ujz8xgkgq.css';
import '../../css/g/gkaae-wpd.css';
import '../../css/u/usd9mdqzj.css';
import '../../css/c/c4dm7ybpc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ujz8xgkgq"/><path clip-rule="evenodd" class="gkaae-wpd"/><path class="usd9mdqzj"/><path class="c4dm7ybpc"/></g>`,
		"fallback": "streamline-flex-color:cube",
	});
}

export default Component;
