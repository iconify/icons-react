import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6oa8knwz.css';
import '../../css/x/xxgbczr8p.css';
import '../../css/c/c6b6y2bkd.css';
import '../../css/n/nf_ginl5s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6oa8knwz"/><path class="xxgbczr8p"/><path class="c6b6y2bkd"/><path class="nf_ginl5s"/>`,
		"fallback": "energy-icons:floating-wind-20",
	});
}

export default Component;
