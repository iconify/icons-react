import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oql7-e3yp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oql7-e3yp"/>`,
		"fallback": "simple-icons:fireflyiii",
	});
}

export default Component;
