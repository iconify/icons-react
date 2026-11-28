import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnbx4cb7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnbx4cb7f"/>`,
		"fallback": "noviair:face-laugh",
	});
}

export default Component;
