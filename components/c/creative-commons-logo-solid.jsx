import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjjp56bsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sjjp56bsm"/>`,
		"fallback": "streamline-logos:creative-commons-logo-solid",
	});
}

export default Component;
