import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m76uv7b2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m76uv7b2o"/>`,
		"fallback": "tdesign:bridge-5-filled",
	});
}

export default Component;
