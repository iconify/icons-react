import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-0sac1ac.css';
import '../../css/v/vkfs5tb6p.css';
import '../../css/f/fd5fwsfcn.css';
import '../../css/w/wgur2cb9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-0sac1ac wm-k"/><path class="vkfs5tb6p wm-k"/><path class="fd5fwsfcn wm-k"/><path class="wgur2cb9s wm-a"/>`,
		"fallback": "withicons-bauhaus:briefcase",
	});
}

export default Component;
