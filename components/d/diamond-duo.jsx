import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs0n83b1m.css';
import '../../css/b/bats-ew3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs0n83b1m secondary"/><path class="bats-ew3c primary"/>`,
		"fallback": "iconaut:diamond-duo",
	});
}

export default Component;
