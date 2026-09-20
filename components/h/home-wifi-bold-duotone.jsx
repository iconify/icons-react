import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8bd9jbjt.css';
import '../../css/i/ilq4zvino.css';
import '../../css/o/otz3qz_jq.css';
import '../../css/l/l2qt7co3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8bd9jbjt"/><path class="ilq4zvino"/><path class="otz3qz_jq"/><path class="l2qt7co3j"/>`,
		"fallback": "solar:home-wifi-bold-duotone",
	});
}

export default Component;
