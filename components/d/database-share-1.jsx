import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k_949kg-n.css';
import '../../css/c/cxy33t7do.css';
import '../../css/b/bgfpcoder.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k_949kg-n"/><path class="cxy33t7do"/><path class="bgfpcoder"/></g>`,
		"fallback": "streamline-ultimate:database-share-1",
	});
}

export default Component;
