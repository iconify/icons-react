import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkz-nvrhb.css';
import '../../css/y/ypfowt0pb.css';
import '../../css/f/f8imsv3ke.css';
import '../../css/y/y7nehvo7v.css';
import '../../css/y/y1ys-0bcz.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkz-nvrhb"/><path class="ypfowt0pb"/><path class="f8imsv3ke"/><path class="y7nehvo7v"/><path class="y1ys-0bcz"/>`,
		"fallback": "devicon:almalinux",
	});
}

export default Component;
