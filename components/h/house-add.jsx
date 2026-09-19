import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rngyk4bhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rngyk4bhn"/>`,
		"fallback": "ci:house-add",
	});
}

export default Component;
