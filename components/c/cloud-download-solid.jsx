import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trg_kpbvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="trg_kpbvb"/>`,
		"fallback": "basil:cloud-download-solid",
	});
}

export default Component;
