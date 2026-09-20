import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwb6n5blq.css';
import '../../css/r/r6k4p34go.css';
import '../../css/g/g7e8ebbye.css';
import '../../css/m/mogepibqn.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwb6n5blq"/><path class="r6k4p34go"/><path class="g7e8ebbye"/><path class="mogepibqn"/>`,
		"fallback": "token:arbitrum",
	});
}

export default Component;
