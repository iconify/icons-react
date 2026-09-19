import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahus_ublf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahus_ublf"/>`,
		"fallback": "grommet-icons:bitcoin",
	});
}

export default Component;
