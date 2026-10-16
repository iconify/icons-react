import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxs-cj0rl.css';
import '../../css/z/z9yfx3tkk.css';
import '../../css/u/uqtatsbzn.css';
import '../../css/q/qfs7nya9i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxs-cj0rl"/><path class="z9yfx3tkk"/><path class="uqtatsbzn"/><path class="qfs7nya9i"/>`,
		"fallback": "energy-icons:fuel-oil-tank-20-bold",
	});
}

export default Component;
