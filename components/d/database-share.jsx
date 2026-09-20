import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bgbi_bb4g.css';
import '../../css/s/sp0n-ibto.css';
import '../../css/v/vvt48zbjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bgbi_bb4g"/><path class="sp0n-ibto"/><path class="vvt48zbjf"/></g>`,
		"fallback": "tabler:database-share",
	});
}

export default Component;
