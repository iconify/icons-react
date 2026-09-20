import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-__p5b6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-__p5b6o"/>`,
		"fallback": "majesticons:hard-drive-line",
	});
}

export default Component;
