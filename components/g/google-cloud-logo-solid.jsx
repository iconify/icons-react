import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy1g-5rhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cy1g-5rhw"/>`,
		"fallback": "streamline-logos:google-cloud-logo-solid",
	});
}

export default Component;
