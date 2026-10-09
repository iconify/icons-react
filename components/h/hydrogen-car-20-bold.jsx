import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1pfy_bym.css';
import '../../css/f/fsw4fslqf.css';
import '../../css/z/z_svvovos.css';
import '../../css/c/cxc03ab-d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1pfy_bym"/><path class="fsw4fslqf"/><path class="z_svvovos"/><path class="cxc03ab-d"/>`,
		"fallback": "energy-icons:hydrogen-car-20-bold",
	});
}

export default Component;
