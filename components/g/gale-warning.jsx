import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhmdsel-p.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhmdsel-p"/>`,
		"fallback": "wi:gale-warning",
	});
}

export default Component;
