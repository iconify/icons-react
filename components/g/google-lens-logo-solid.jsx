import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq_pwhb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xq_pwhb4g"/>`,
		"fallback": "streamline-logos:google-lens-logo-solid",
	});
}

export default Component;
