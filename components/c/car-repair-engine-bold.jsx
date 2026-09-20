import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phcz05bgu.css';
import '../../css/a/a4-kayjwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phcz05bgu"/><path class="a4-kayjwo"/>`,
		"fallback": "streamline-ultimate:car-repair-engine-bold",
	});
}

export default Component;
