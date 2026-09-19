import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/o3y-mwb9w.css';
import '../../css/i/iewq-3_sp.css';
import '../../css/f/fi8jscb1n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGj935KcSj"><g class="aql7dnt-u"><path class="o3y-mwb9w"/><rect class="iewq-3_sp"/><path class="fi8jscb1n"/></g></mask></defs><path mask="url(#SVGj935KcSj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:hat",
	});
}

export default Component;
