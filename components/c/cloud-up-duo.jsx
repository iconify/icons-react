import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkgs06hvj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/da92j5b5b.css';
import '../../css/q/qo8ugzg3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkgs06hvj secondary"/><g class="dt0cm9dhy primary"><path class="da92j5b5b"/><path class="qo8ugzg3i"/></g>`,
		"fallback": "iconaut:cloud-up-duo",
	});
}

export default Component;
