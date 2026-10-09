import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr0clkknd.css';
import '../../css/b/bhhnh4bmp.css';
import '../../css/k/k_3z1lbzk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr0clkknd"/><path class="bhhnh4bmp"/><path class="k_3z1lbzk"/>`,
		"fallback": "energy-icons:hydrogen-refuelling-20",
	});
}

export default Component;
