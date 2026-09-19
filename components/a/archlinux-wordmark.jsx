import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjeh93b6f.css';
import '../../css/h/hh3_j8aeb.css';
import '../../css/r/rqsccpugz.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjeh93b6f"/><path class="hh3_j8aeb"/><path class="rqsccpugz"/>`,
		"fallback": "devicon:archlinux-wordmark",
	});
}

export default Component;
