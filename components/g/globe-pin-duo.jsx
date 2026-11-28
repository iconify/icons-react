import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atdwg2krv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l11ovjb-s.css';
import '../../css/q/qw6pybb1f.css';
import '../../css/t/t-bwbsbwy.css';
import '../../css/j/j0tm0dnhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atdwg2krv secondary"/><g class="dt0cm9dhy primary"><path class="l11ovjb-s"/><path class="qw6pybb1f"/><path class="t-bwbsbwy"/><path class="j0tm0dnhj"/></g>`,
		"fallback": "iconaut:globe-pin-duo",
	});
}

export default Component;
