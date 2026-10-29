import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/whdwil_kh.css';
import '../../css/g/ghkwg_b8i.css';
import '../../css/k/k3mij9nwy.css';
import '../../css/k/kjl88pbfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="whdwil_kh"/><path class="ghkwg_b8i wm-a"/><path class="k3mij9nwy"/><path class="kjl88pbfm wm-a"/></g>`,
		"fallback": "withicons:drumstick-duo",
	});
}

export default Component;
