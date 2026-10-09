import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnl7id0ua.css';
import '../../css/k/k4v56fbhg.css';
import '../../css/c/ci9x7ub2k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnl7id0ua"/><path class="k4v56fbhg"/><path class="ci9x7ub2k"/>`,
		"fallback": "energy-icons:heat-pump-water-20",
	});
}

export default Component;
