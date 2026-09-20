import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1433jbko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q1433jbko"/>`,
		"fallback": "streamline-sharp:cloud-data-transfer-solid",
	});
}

export default Component;
