import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf27qfbet.css';
import '../../css/s/ssrhhq6tf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf27qfbet"/><path class="ssrhhq6tf"/>`,
		"fallback": "energy-icons:heat-network-20",
	});
}

export default Component;
