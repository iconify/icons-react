import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkgs06hvj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/da92j5b5b.css';
import '../../css/u/udid01bpg.css';
import '../../css/g/gv-8ekbkm.css';
import '../../css/t/ttb0p-bhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkgs06hvj secondary"/><g class="dt0cm9dhy primary"><path class="da92j5b5b"/><path class="udid01bpg"/><path class="gv-8ekbkm"/><path class="ttb0p-bhr"/></g>`,
		"fallback": "iconaut:cloud-signal-duo",
	});
}

export default Component;
