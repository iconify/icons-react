import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsz3yfqbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bsz3yfqbl"/>`,
		"fallback": "streamline-logos:google-buzz-logo-solid",
	});
}

export default Component;
