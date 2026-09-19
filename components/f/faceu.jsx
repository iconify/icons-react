import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/afeo2fbqa.css';
import '../../css/r/rbxch99hb.css';
import '../../css/o/oe3u2eq0u.css';
import '../../css/a/aw231xbym.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGfqvSaccR"><g class="ft5dv1b6b"><path class="afeo2fbqa"/><path class="rbxch99hb"/><ellipse class="oe3u2eq0u"/><ellipse class="aw231xbym"/></g></mask></defs><path mask="url(#SVGfqvSaccR)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:faceu",
	});
}

export default Component;
