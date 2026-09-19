import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqb2svp2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqb2svp2w"/>`,
		"fallback": "grommet-icons:fireball",
	});
}

export default Component;
