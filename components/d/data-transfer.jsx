import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9bimvbjr.css';
import '../../css/w/w-h-j4bey.css';
import '../../css/t/t3lpz8b2k.css';
import '../../css/a/ah7dfb-3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9bimvbjr"/><path class="w-h-j4bey"/><path class="t3lpz8b2k"/><path class="ah7dfb-3o"/>`,
		"fallback": "gcp:data-transfer",
	});
}

export default Component;
