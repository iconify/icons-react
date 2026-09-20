import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcglrybdp.css';
import '../../css/k/k74euduoi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcglrybdp"/><path class="k74euduoi"/>`,
		"fallback": "streamline-ultimate:common-file-add-bold",
	});
}

export default Component;
