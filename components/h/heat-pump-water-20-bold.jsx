import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs_q2h7oe.css';
import '../../css/p/pk1wthwad.css';
import '../../css/b/broi4tbbu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs_q2h7oe"/><path class="pk1wthwad"/><path class="broi4tbbu"/>`,
		"fallback": "energy-icons:heat-pump-water-20-bold",
	});
}

export default Component;
