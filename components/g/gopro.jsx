import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vduzfl9yu.css';
import '../../css/g/gk3irevto.css';
import '../../css/b/bf_pmdp-t.css';
import '../../css/h/he7u0ebnu.css';
import '../../css/d/dr06m3b1h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG2w4X3bfk"><g class="ft5dv1b6b"><path class="vduzfl9yu"/><rect class="gk3irevto"/><circle class="bf_pmdp-t"/><path class="he7u0ebnu"/><rect class="dr06m3b1h"/></g></mask></defs><path mask="url(#SVG2w4X3bfk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:gopro",
	});
}

export default Component;
