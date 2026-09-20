import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_n8q2b0o.css';
import '../../css/n/nmzc2_bim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_n8q2b0o"/><path class="nmzc2_bim"/>`,
		"fallback": "streamline-ultimate:house-4-bold",
	});
}

export default Component;
