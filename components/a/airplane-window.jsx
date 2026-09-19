import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/p/p_vjdzb2q.css';
import '../../css/b/br0xn1bug.css';
import '../../css/c/cnwdk_ewy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGuySLTdcI"><g class="aql7dnt-u"><path class="p_vjdzb2q"/><path class="br0xn1bug"/><path class="cnwdk_ewy"/></g></mask></defs><path mask="url(#SVGuySLTdcI)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:airplane-window",
	});
}

export default Component;
