import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfbn_4p6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mfbn_4p6a"/>`,
		"fallback": "griddy-icons:flash-double",
	});
}

export default Component;
