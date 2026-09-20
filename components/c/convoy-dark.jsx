import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmjc3fw5x.css';
import '../../css/d/d3p561beu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmjc3fw5x"/><path class="d3p561beu"/>`,
		"fallback": "selfhst:convoy-dark",
	});
}

export default Component;
