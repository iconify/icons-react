import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w34osu__y.css';
import '../../css/i/iubmt2b7z.css';
import '../../css/g/g-8h4-gfz.css';
import '../../css/t/tsye42sqw.css';
import '../../css/a/awcpsv2bc.css';
import '../../css/n/nfp7-6_0n.css';
import '../../css/d/datc7nbwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="w34osu__y"><path class="iubmt2b7z"/><path class="g-8h4-gfz"/><path class="tsye42sqw"/><path class="awcpsv2bc"/><path class="nfp7-6_0n"/><path class="datc7nbwn"/></g>`,
		"fallback": "streamline-cyber:business-chat-4",
	});
}

export default Component;
