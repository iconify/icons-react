import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwxp4tvzv.css';
import '../../css/d/dyto25hnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer nwxp4tvzv"/><path class="duoicon-primary-layer dyto25hnh"/>`,
		"fallback": "duo-icons:car",
	});
}

export default Component;
