import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xt2kaob-a.css';
import '../../css/l/lf_6xcc0h.css';
import '../../css/i/i3gm_p-3h.css';
import '../../css/d/d6t_ucbpo.css';
import '../../css/p/pod2lxhzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="xt2kaob-a"/><path class="lf_6xcc0h wm-a"/><path class="i3gm_p-3h wm-a"/><path class="d6t_ucbpo"/><path class="pod2lxhzh wm-a"/></g>`,
		"fallback": "withicons:clapperboard-duo",
	});
}

export default Component;
