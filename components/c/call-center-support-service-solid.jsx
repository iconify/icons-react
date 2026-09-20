import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzes-1bcg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nzes-1bcg"/>`,
		"fallback": "streamline:call-center-support-service-solid",
	});
}

export default Component;
