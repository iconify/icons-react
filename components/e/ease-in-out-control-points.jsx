import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl6g3-bfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hl6g3-bfc"/>`,
		"fallback": "tabler:ease-in-out-control-points",
	});
}

export default Component;
