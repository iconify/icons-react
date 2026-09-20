import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm498ybdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gm498ybdo"/>`,
		"fallback": "keyline-icons:expand-dashed-up-left-sharp",
	});
}

export default Component;
