import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsdz_cbfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsdz_cbfp"/>`,
		"fallback": "withicons:heart-solid",
	});
}

export default Component;
