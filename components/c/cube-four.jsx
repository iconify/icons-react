import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/x/xf_l2p71t.css';
import '../../css/x/xexwo663a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGW2qGme4O"><g class="aql7dnt-u"><path class="xf_l2p71t"/><path class="xexwo663a"/></g></mask></defs><path mask="url(#SVGW2qGme4O)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:cube-four",
	});
}

export default Component;
