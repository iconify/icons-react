import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqcmgeb4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqcmgeb4f"/>`,
		"fallback": "feather:external-link",
	});
}

export default Component;
