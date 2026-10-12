import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldie7dbqp.css';
import '../../css/f/f25sq8ybr.css';
import '../../css/l/lztzvubai.css';
import '../../css/g/gnqh0y9sc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldie7dbqp"/><path class="f25sq8ybr"/><path class="lztzvubai"/><path class="gnqh0y9sc"/>`,
		"fallback": "energy-icons:gem-20-bold",
	});
}

export default Component;
