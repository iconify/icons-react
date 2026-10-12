import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1b4s504g.css';
import '../../css/o/o-cy3-bgi.css';
import '../../css/v/vxcz8bbin.css';
import '../../css/u/u0_qkbcpi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1b4s504g"/><path class="o-cy3-bgi"/><path class="vxcz8bbin"/><path class="u0_qkbcpi"/>`,
		"fallback": "energy-icons:broom-20",
	});
}

export default Component;
