import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omm57_y2w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omm57_y2w"/>`,
		"fallback": "icon-park-outline:block-seven",
	});
}

export default Component;
