import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvq_dmzhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvq_dmzhq"/>`,
		"fallback": "simple-icons:fastly",
	});
}

export default Component;
