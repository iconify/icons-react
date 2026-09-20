import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hy_zkpb2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hy_zkpb2d"/>`,
		"fallback": "si:hammer-line",
	});
}

export default Component;
