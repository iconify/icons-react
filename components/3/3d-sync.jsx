import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxyv9z9mh.css';
import '../../css/n/n3jiytb1t.css';
import '../../css/n/naea2ubcj.css';
import '../../css/x/xoslwxbtl.css';
import '../../css/z/zdt345bvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="yxyv9z9mh"><path class="n3jiytb1t"/><path class="naea2ubcj"/><path class="xoslwxbtl"/><path class="zdt345bvg"/></g>`,
		"fallback": "streamline-cyber-color:3d-sync",
	});
}

export default Component;
