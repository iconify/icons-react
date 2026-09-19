import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xoh_d-6_k.css';
import '../../css/j/jm2mnjbyt.css';
import '../../css/v/vo0s0d-xn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGUUJ2XbXa"><g class="ufeehvblu"><path class="xoh_d-6_k"/><path class="jm2mnjbyt"/><path class="vo0s0d-xn"/></g></mask></defs><path mask="url(#SVGUUJ2XbXa)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:blackboard",
	});
}

export default Component;
