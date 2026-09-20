import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/taxi_6bcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="taxi_6bcq"/>`,
		"fallback": "ri:git-repository-line",
	});
}

export default Component;
