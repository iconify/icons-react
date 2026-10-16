import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6_s1zkbf.css';
import '../../css/g/gf-zaq-tp.css';
import '../../css/j/jfsyo7b1z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6_s1zkbf"/><path class="gf-zaq-tp"/><path class="jfsyo7b1z"/>`,
		"fallback": "energy-icons:hazard-toxic-20",
	});
}

export default Component;
