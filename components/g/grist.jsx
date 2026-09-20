import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvf5ks7kl.css';
import '../../css/y/yp9lcc2_w.css';
import '../../css/y/ycm_oobud.css';
import '../../css/z/z02jb9bcg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvf5ks7kl"/><path class="yp9lcc2_w"/><path class="ycm_oobud"/><path class="z02jb9bcg"/>`,
		"fallback": "selfhst:grist",
	});
}

export default Component;
