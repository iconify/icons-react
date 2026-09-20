import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqmbhv_3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqmbhv_3b"/>`,
		"fallback": "nrk:arrow-nested",
	});
}

export default Component;
