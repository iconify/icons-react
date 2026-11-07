import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf863cbsv.css';
import '../../css/z/zfmuiycex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nf863cbsv"/><path class="zfmuiycex"/>`,
		"fallback": "solar:arrow-left-up-bold-duotone",
	});
}

export default Component;
