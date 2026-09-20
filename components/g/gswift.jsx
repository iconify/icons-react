import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okeha2n_r.css';
import '../../css/e/e8h9khb5x.css';
import '../../css/q/quzt27byr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okeha2n_r"/><path class="e8h9khb5x"/><path class="quzt27byr"/>`,
		"fallback": "token:gswift",
	});
}

export default Component;
