import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rrb02niec.css';
import '../../css/e/ecsb1bbva.css';
import '../../css/a/awndadvkq.css';
import '../../css/w/wdnrfxjuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="rrb02niec wm-a"/><path class="ecsb1bbva wm-k"/><path class="awndadvkq wm-a"/><path class="wdnrfxjuj wm-s"/></g>`,
		"fallback": "withicons:firecracker-string-sketch",
	});
}

export default Component;
