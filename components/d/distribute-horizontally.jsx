import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/y/yr9irdb6u.css';
import '../../css/i/iulnlabex.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGAq9RzluT"><g class="v3_i3wktz"><path class="yr9irdb6u"/><path class="iulnlabex"/></g></mask></defs><path mask="url(#SVGAq9RzluT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:distribute-horizontally",
	});
}

export default Component;
