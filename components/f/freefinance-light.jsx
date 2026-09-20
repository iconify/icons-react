import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvv2qcb_p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvv2qcb_p"/>`,
		"fallback": "selfhst:freefinance-light",
	});
}

export default Component;
