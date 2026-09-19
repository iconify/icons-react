import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rs4_mfifm.css';
import '../../css/k/kcrc3hg8p.css';
import '../../css/s/seh1ydy_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rs4_mfifm"/><path class="kcrc3hg8p"/><path class="seh1ydy_l"/></g>`,
		"fallback": "hugeicons:gnome",
	});
}

export default Component;
