import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocwumyh_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ocwumyh_r"/>`,
		"fallback": "streamline-sharp:hierarchy-16-solid",
	});
}

export default Component;
