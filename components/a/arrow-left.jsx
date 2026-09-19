import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebldvkbho.css';
import '../../css/q/q_3cglb4g.css';
import '../../css/d/dxxog678i.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebldvkbho"/><path class="q_3cglb4g"/><path class="dxxog678i"/>`,
		"fallback": "ei:arrow-left",
	});
}

export default Component;
