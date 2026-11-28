import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvwy_vb6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvwy_vb6y"/>`,
		"fallback": "noviair:bus-clock",
	});
}

export default Component;
