import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn8qa1b6g.css';
import '../../css/q/qgrtu-b6i.css';
import '../../css/v/vzf5-cbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn8qa1b6g"/><path class="qgrtu-b6i"/><path class="vzf5-cbeo"/>`,
		"fallback": "energy-icons:cave-48",
	});
}

export default Component;
