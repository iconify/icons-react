import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmo5pdb9h.css';
import '../../css/p/p5fk5_2cq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmo5pdb9h"/><path class="p5fk5_2cq"/>`,
		"fallback": "energy-icons:highlighter-20",
	});
}

export default Component;
