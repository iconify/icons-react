import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txfzqa3vh.css';
import '../../css/o/ooafjrbnh.css';
import '../../css/m/mqpsn0bso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txfzqa3vh"/><path class="ooafjrbnh"/><path class="mqpsn0bso"/>`,
		"fallback": "pixel:face-grin",
	});
}

export default Component;
