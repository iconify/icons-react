import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/q/q80v2ub8a.css';
import '../../css/y/yeoc4zxsd.css';
import '../../css/d/dwxhxbcyq.css';
import '../../css/w/w7c56gbju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="q80v2ub8a"/><path class="yeoc4zxsd"/></g><path class="dwxhxbcyq"/><path class="w7c56gbju"/>`,
		"fallback": "solar:chevrons-up-down-bold-duotone",
	});
}

export default Component;
