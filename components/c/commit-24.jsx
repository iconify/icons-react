import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp5ysukwo.css';
import '../../css/r/rve223_3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sp5ysukwo"/><path class="rve223_3q"/>`,
		"fallback": "octicon:commit-24",
	});
}

export default Component;
