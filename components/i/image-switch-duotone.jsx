import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcti67wgz.css';
import '../../css/v/votvkdbrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcti67wgz"/><path class="votvkdbrj"/>`,
		"fallback": "stash:image-switch-duotone",
	});
}

export default Component;
