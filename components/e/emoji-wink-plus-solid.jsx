import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnjy4wpbq.css';
import '../../css/l/lxrsy8bdk.css';
import '../../css/g/ga3lzib3e.css';
import '../../css/n/njhb20v1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnjy4wpbq"/><path class="lxrsy8bdk"/><path class="ga3lzib3e"/><path clip-rule="evenodd" class="njhb20v1u"/>`,
		"fallback": "stash:emoji-wink-plus-solid",
	});
}

export default Component;
