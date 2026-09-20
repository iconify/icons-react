import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfyo9m4in.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfyo9m4in"/>`,
		"fallback": "tabler:brand-mongodb",
	});
}

export default Component;
