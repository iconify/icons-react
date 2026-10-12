import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1y6bsbqe.css';
import '../../css/a/aldux5bbv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1y6bsbqe"/><path class="aldux5bbv"/>`,
		"fallback": "energy-icons:face-mask-20",
	});
}

export default Component;
