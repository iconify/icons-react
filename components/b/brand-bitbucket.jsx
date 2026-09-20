import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xgw2s8gim.css';
import '../../css/e/ez71t2b7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xgw2s8gim"/><path class="ez71t2b7w"/></g>`,
		"fallback": "tabler:brand-bitbucket",
	});
}

export default Component;
