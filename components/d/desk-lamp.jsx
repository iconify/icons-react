import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzy2t0_hv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzy2t0_hv"/>`,
		"fallback": "noviair:desk-lamp",
	});
}

export default Component;
