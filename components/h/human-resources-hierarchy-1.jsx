import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmo9ppb1i.css';
import '../../css/a/a5uh-zb9n.css';
import '../../css/n/no99ojxxs.css';
import '../../css/f/f5o-f7bmk.css';
import '../../css/l/lgd5f5bzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="lmo9ppb1i"><path class="a5uh-zb9n"/><path class="no99ojxxs"/><path class="f5o-f7bmk"/><path class="lgd5f5bzu"/></g>`,
		"fallback": "streamline-ultimate-color:human-resources-hierarchy-1",
	});
}

export default Component;
