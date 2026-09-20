import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0myofk9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0myofk9f"/>`,
		"fallback": "tabler:cube-off",
	});
}

export default Component;
