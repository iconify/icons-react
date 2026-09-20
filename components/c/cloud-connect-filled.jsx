import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf_np14xc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cf_np14xc"/>`,
		"fallback": "reicon:cloud-connect-filled",
	});
}

export default Component;
