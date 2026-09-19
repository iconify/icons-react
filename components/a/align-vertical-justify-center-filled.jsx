import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0si7bc9c.css';
import '../../css/r/r-xntnbat.css';
import '../../css/l/lq-q1ngth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="m0si7bc9c"/><rect class="r-xntnbat"/><path class="lq-q1ngth"/>`,
		"fallback": "boxicons:align-vertical-justify-center-filled",
	});
}

export default Component;
