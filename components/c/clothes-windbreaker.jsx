import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yfmnn51un.css';
import '../../css/v/vwm56ql2p.css';
import '../../css/b/bu86gfbrw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yfmnn51un"/><path class="vwm56ql2p"/><path class="bu86gfbrw"/></g>`,
		"fallback": "icon-park-solid:clothes-windbreaker",
	});
}

export default Component;
