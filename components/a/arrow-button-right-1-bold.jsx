import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxnsrcbjt.css';
import '../../css/u/uw344sgbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxnsrcbjt"/><path class="uw344sgbq"/>`,
		"fallback": "streamline-ultimate:arrow-button-right-1-bold",
	});
}

export default Component;
