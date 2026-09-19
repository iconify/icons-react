import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s23bnwb9n.css';

const viewBox = {"width":343,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s23bnwb9n"/>`,
		"fallback": "file-icons:cloudfoundry",
	});
}

export default Component;
