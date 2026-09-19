import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r1m-mr4if.css';
import '../../css/p/pfqm07bad.css';
import '../../css/w/wq3mw5q_z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIkhD9cef"><g class="ft5dv1b6b"><path class="r1m-mr4if"/><path class="pfqm07bad"/><path class="wq3mw5q_z"/></g></mask></defs><path mask="url(#SVGIkhD9cef)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:helmet",
	});
}

export default Component;
