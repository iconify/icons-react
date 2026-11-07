import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmexrqblb.css';
import '../../css/j/j4o534btb.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/p/pztiu2bub.css';
import '../../css/j/j28658mae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmexrqblb"/><path class="j4o534btb"/><g class="xtpeb-edw"><path class="pztiu2bub"/><path class="j28658mae"/></g>`,
		"fallback": "solar:hashtag-bold-duotone",
	});
}

export default Component;
