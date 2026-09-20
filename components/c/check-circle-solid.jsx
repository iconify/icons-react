import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyd11u1lr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyd11u1lr"/>`,
		"fallback": "pixel:check-circle-solid",
	});
}

export default Component;
