import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4si1_bgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4si1_bgv"/>`,
		"fallback": "mdi-light:file-multiple",
	});
}

export default Component;
