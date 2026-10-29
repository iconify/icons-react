import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l12p6vo3k.css';
import '../../css/q/qqmov0t5w.css';
import '../../css/b/b8dal4kiv.css';
import '../../css/l/lztolrbic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l12p6vo3k wm-k"/><path class="qqmov0t5w wm-k"/><path class="b8dal4kiv wm-a"/><path class="lztolrbic wm-a"/>`,
		"fallback": "withicons-bauhaus:cloud-snow",
	});
}

export default Component;
