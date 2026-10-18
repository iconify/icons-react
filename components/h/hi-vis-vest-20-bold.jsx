import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv2slsbxu.css';
import '../../css/g/glkalfxwv.css';
import '../../css/y/ywpb2n2bu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uv2slsbxu"/><path class="glkalfxwv"/><path class="ywpb2n2bu"/>`,
		"fallback": "energy-icons:hi-vis-vest-20-bold",
	});
}

export default Component;
