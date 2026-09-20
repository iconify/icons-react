import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkak67_rz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkak67_rz"/>`,
		"fallback": "tabler:circle-dashed-letter-o",
	});
}

export default Component;
