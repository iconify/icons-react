import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/s/sedcd-iki.css';
import '../../css/g/gbrw6u1ww.css';
import '../../css/a/adk15x0vw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlbyQ8SSh"><g class="v3_i3wktz"><path class="sedcd-iki"/><path class="gbrw6u1ww"/><path class="adk15x0vw"/></g></mask></defs><path mask="url(#SVGlbyQ8SSh)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:flight-safety",
	});
}

export default Component;
