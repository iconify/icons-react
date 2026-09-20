import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrlu5ccyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrlu5ccyc"/>`,
		"fallback": "tabler:bread",
	});
}

export default Component;
