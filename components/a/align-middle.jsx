import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okr4xubys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okr4xubys"/>`,
		"fallback": "streamline-ultimate:align-middle",
	});
}

export default Component;
