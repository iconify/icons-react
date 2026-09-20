import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vifv5ib2o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vifv5ib2o"/>`,
		"fallback": "pinhead:bicycle-in-locker",
	});
}

export default Component;
