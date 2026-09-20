import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njjw8aczg.css';
import '../../css/v/vo_ontb6g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njjw8aczg"/><path class="vo_ontb6g"/>`,
		"fallback": "streamline-pixel:hand-zoom",
	});
}

export default Component;
