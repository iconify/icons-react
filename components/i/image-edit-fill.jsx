import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/niy8yfjwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="niy8yfjwx"/>`,
		"fallback": "ri:image-edit-fill",
	});
}

export default Component;
