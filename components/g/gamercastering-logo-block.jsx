import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv8e7ibdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cv8e7ibdu"/>`,
		"fallback": "streamline-logos:gamercastering-logo-block",
	});
}

export default Component;
