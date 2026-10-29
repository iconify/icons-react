import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6pes-bxs.css';
import '../../css/h/hknnmqaty.css';
import '../../css/p/pj25m4b3c.css';
import '../../css/s/sp8nadr0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6pes-bxs wm-k"/><path class="hknnmqaty wm-k"/><path class="pj25m4b3c wm-k"/><path class="sp8nadr0y wm-a"/>`,
		"fallback": "withicons-bauhaus:hard-drive",
	});
}

export default Component;
