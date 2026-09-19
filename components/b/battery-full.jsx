import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pk3045bun.css';
import '../../css/q/q0fujjtaq.css';
import '../../css/g/g4hu-_ntn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGwfhVHbgs"><g class="ft5dv1b6b"><path class="pk3045bun"/><path class="q0fujjtaq"/><path class="g4hu-_ntn"/></g></mask></defs><path mask="url(#SVGwfhVHbgs)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:battery-full",
	});
}

export default Component;
