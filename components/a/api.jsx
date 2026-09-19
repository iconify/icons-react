import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/b/bqgnctfbd.css';
import '../../css/t/t8srh3bsq.css';
import '../../css/m/m0mv3gbgf.css';
import '../../css/h/hu0hzbbeq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGAI7ezcdh"><g class="aql7dnt-u"><path class="bqgnctfbd"/><path class="t8srh3bsq"/><path class="m0mv3gbgf"/><path class="hu0hzbbeq"/></g></mask></defs><path mask="url(#SVGAI7ezcdh)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:api",
	});
}

export default Component;
