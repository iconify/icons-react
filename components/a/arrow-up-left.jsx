import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mutf_sboy.css';
import '../../css/g/gdwd5felf.css';
import '../../css/p/p42fz6t_u.css';
import '../../css/z/zgmcztboz.css';
import '../../css/q/qyy895bgd.css';
import '../../css/s/s9fbtob_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mutf_sboy wm-shadow"/><path class="gdwd5felf wm-k"/><path class="p42fz6t_u wm-k"/><path class="wm-k zgmcztboz"/><path class="qyy895bgd wm-k"/><path class="s9fbtob_a wm-shine"/>`,
		"fallback": "withicons-pastel:arrow-up-left",
	});
}

export default Component;
