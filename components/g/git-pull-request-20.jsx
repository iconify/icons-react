import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv7_8fbub.css';
import '../../css/s/sgaegpv7c.css';
import '../../css/f/fv65liyxm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv7_8fbub"/><path class="sgaegpv7c"/><path class="fv65liyxm"/>`,
		"fallback": "energy-icons:git-pull-request-20",
	});
}

export default Component;
