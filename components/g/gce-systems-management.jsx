import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozw9cgbgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozw9cgbgm"/>`,
		"fallback": "gcp:gce-systems-management",
	});
}

export default Component;
