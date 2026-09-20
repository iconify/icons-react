import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm31op6ck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qm31op6ck"/>`,
		"fallback": "streamline-logos:google-logo-solid",
	});
}

export default Component;
