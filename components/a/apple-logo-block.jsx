import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smfu5rbzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="smfu5rbzw"/>`,
		"fallback": "streamline-logos:apple-logo-block",
	});
}

export default Component;
