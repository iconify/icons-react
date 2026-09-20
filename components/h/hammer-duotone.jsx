import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/beb4umbqn.css';
import '../../css/o/ol2kopnbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="beb4umbqn"/><path class="ol2kopnbl"/>`,
		"fallback": "si:hammer-duotone",
	});
}

export default Component;
