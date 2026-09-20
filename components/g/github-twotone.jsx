import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlrnvt.css';
import '../../css/a/a0m25c.css';
import '../../css/b/bmu-7y.css';
import '../../css/l/l48m1g.css';
import '../../css/f/fill-to-0.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-from-32.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlrnvt"/><path class="a0m25c bmu-7y"/><path class="a0m25c l48m1g"/>`,
		"fallback": "line-md:github-twotone",
	});
}

export default Component;
