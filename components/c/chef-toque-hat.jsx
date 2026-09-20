import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/lkubkpbkx.css';
import '../../css/i/i3-g6dbwt.css';
import '../../css/m/ml4dqq0hl.css';
import '../../css/x/x_g31y3xd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="lkubkpbkx"/><path class="i3-g6dbwt"/><path class="ml4dqq0hl"/><path class="x_g31y3xd"/></g>`,
		"fallback": "streamline-plump-color:chef-toque-hat",
	});
}

export default Component;
