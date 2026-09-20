import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbs1q3kot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dbs1q3kot"/>`,
		"fallback": "keyline-icons:clock-5-sharp-fill",
	});
}

export default Component;
