import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zks-2n3ip.css';
import '../../css/x/xmcmw7bvl.css';
import '../../css/m/m03epfbpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zks-2n3ip"/><circle class="xmcmw7bvl"/><path class="m03epfbpb"/></g>`,
		"fallback": "struq:hide",
	});
}

export default Component;
