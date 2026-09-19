import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrso7y3c.css';
import '../../css/p/p9_9iqf-j.css';
import '../../css/g/g3y8pb1er.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGKzRejezo"><g class="ylrso7y3c"><path class="p9_9iqf-j"/><path class="g3y8pb1er"/></g></mask></defs><path mask="url(#SVGKzRejezo)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:big-x",
	});
}

export default Component;
