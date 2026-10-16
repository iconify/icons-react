import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i40h72d1d.css';
import '../../css/c/coczllb-z.css';
import '../../css/j/j-estpbbv.css';
import '../../css/m/m6s19vg5i.css';
import '../../css/h/hgc4irbby.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i40h72d1d"/><path class="coczllb-z"/><path class="j-estpbbv"/><path class="m6s19vg5i"/><path class="hgc4irbby"/>`,
		"fallback": "energy-icons:assembly-point-20-bold",
	});
}

export default Component;
