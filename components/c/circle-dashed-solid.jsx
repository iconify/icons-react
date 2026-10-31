import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zf54j2bcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zf54j2bcm"/>`,
		"fallback": "sidekickicons:circle-dashed-solid",
	});
}

export default Component;
