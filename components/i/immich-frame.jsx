import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlx-9kbbc.css';
import '../../css/j/j9bg-6ovb.css';
import '../../css/q/q8gh54b1j.css';
import '../../css/e/ectfl7b1s.css';
import '../../css/p/p_z4wwf6p.css';
import '../../css/b/bbniey5_f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlx-9kbbc"/><path class="j9bg-6ovb"/><path class="q8gh54b1j"/><path class="ectfl7b1s"/><path class="p_z4wwf6p"/><path class="bbniey5_f"/>`,
		"fallback": "selfhst:immich-frame",
	});
}

export default Component;
