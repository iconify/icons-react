import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpsxqmvrr.css';
import '../../css/g/g5l5kqz1d.css';
import '../../css/f/flbg-5qfl.css';
import '../../css/l/lucz29d3n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpsxqmvrr"/><path class="g5l5kqz1d"/><path class="flbg-5qfl"/><path class="lucz29d3n"/>`,
		"fallback": "selfhst:fastmail",
	});
}

export default Component;
