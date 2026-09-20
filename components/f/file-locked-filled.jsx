import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgf_iypbv.css';
import '../../css/s/sfsa80h7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgf_iypbv"/><path class="sfsa80h7t"/>`,
		"fallback": "tdesign:file-locked-filled",
	});
}

export default Component;
