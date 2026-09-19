import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hup4jharq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hup4jharq"/>`,
		"fallback": "hugeicons:arrow-expand-02",
	});
}

export default Component;
