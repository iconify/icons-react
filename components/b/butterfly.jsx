import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/rim5m_bhc.css';
import '../../css/h/hvz5n6bel.css';
import '../../css/g/gn6ol4bzw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJ58eEd4H"><g class="aql7dnt-u"><path class="rim5m_bhc"/><path class="hvz5n6bel"/><path class="gn6ol4bzw"/></g></mask></defs><path mask="url(#SVGJ58eEd4H)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:butterfly",
	});
}

export default Component;
