import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0q8p-bqq.css';
import '../../css/n/n5-1bobdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x0q8p-bqq"/><path class="n5-1bobdj"/>`,
		"fallback": "solar:hanger-bold-duotone",
	});
}

export default Component;
