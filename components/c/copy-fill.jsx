import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd-eh_bju.css';
import '../../css/s/s5nbh8u_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd-eh_bju"/><path class="s5nbh8u_f"/>`,
		"fallback": "si:copy-fill",
	});
}

export default Component;
