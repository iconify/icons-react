import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r5ctckbpm.css';
import '../../css/h/h4k-zibeu.css';
import '../../css/g/gnzb-7i7c.css';
import '../../css/n/nr0vkv33c.css';
import '../../css/h/h5470nuzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r5ctckbpm"/><path class="h4k-zibeu"/><path class="gnzb-7i7c"/><path class="nr0vkv33c"/><path class="h5470nuzx"/></g>`,
		"fallback": "streamline-cyber-color:factory",
	});
}

export default Component;
