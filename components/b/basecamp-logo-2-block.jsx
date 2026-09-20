import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy3jago4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oy3jago4j"/>`,
		"fallback": "streamline-logos:basecamp-logo-2-block",
	});
}

export default Component;
