import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sntofu_vz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sntofu_vz"/>`,
		"fallback": "mono-icons:folder-add",
	});
}

export default Component;
