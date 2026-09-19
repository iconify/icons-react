import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtelz6blb.css';
import '../../css/v/v45e_3b-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtelz6blb"/><path class="v45e_3b-d"/>`,
		"fallback": "basil:envelope-solid",
	});
}

export default Component;
