import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndxv2tm2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ndxv2tm2f"/>`,
		"fallback": "streamline-logos:elastic-x-pack-logo-solid",
	});
}

export default Component;
