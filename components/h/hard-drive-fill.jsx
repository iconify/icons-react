import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwmyw5b7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gwmyw5b7p"/>`,
		"fallback": "keyline-icons:hard-drive-fill",
	});
}

export default Component;
