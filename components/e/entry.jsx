import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sokgaqver.css';
import '../../css/x/xnv-09bho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sokgaqver"/><path class="xnv-09bho"/>`,
		"fallback": "uim:entry",
	});
}

export default Component;
