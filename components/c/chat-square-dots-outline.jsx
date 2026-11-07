import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzpqn2yzg.css';
import '../../css/e/efx70_a6m.css';
import '../../css/z/zzh-9abbr.css';
import '../../css/f/f5-jmthrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zzpqn2yzg"/><path class="efx70_a6m"/><path class="zzh-9abbr"/><path class="f5-jmthrp"/>`,
		"fallback": "solar:chat-square-dots-outline",
	});
}

export default Component;
