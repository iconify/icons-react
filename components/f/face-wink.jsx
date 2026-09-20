import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl7o9-bgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl7o9-bgv"/>`,
		"fallback": "mdi:face-wink",
	});
}

export default Component;
