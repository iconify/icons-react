import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjyan90lx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bjyan90lx"/>`,
		"fallback": "sidekickicons:document-arrow-path-solid",
	});
}

export default Component;
