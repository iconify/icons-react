import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/b/bvncembqc.css';
import '../../css/y/yp3vjsbtd.css';
import '../../css/l/lohhqg79m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="bvncembqc"/><path class="yp3vjsbtd"/><circle transform="rotate(45 33.485 33.485)" class="lohhqg79m"/></g>`,
		"fallback": "icon-park-outline:file-search",
	});
}

export default Component;
