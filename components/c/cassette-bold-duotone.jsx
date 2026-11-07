import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/geoim1bqf.css';
import '../../css/g/gj0fhibpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="geoim1bqf"/><path clip-rule="evenodd" class="gj0fhibpk"/>`,
		"fallback": "solar:cassette-bold-duotone",
	});
}

export default Component;
