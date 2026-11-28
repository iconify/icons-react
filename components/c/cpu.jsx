import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/ts44bdc2p.css';
import '../../css/d/d9vkjnbmf.css';
import '../../css/r/rrslsmpft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ts44bdc2p"/><path class="d9vkjnbmf"/><path class="rrslsmpft"/></g>`,
		"fallback": "iconaut:cpu",
	});
}

export default Component;
