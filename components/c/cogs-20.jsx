import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kc234ccnu.css';
import '../../css/v/v0_7k5btb.css';
import '../../css/r/rbyjwpwup.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kc234ccnu"/><path class="v0_7k5btb"/><path class="rbyjwpwup"/>`,
		"fallback": "energy-icons:cogs-20",
	});
}

export default Component;
