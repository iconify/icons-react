import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y1kbuqzpw.css';
import '../../css/q/q2sdytbvw.css';
import '../../css/u/u3qj96b3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><ellipse class="y1kbuqzpw"/><path class="q2sdytbvw"/><path class="u3qj96b3u"/></g>`,
		"fallback": "lucide-lab:coins-stack",
	});
}

export default Component;
