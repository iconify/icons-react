import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/ocu06zbra.css';
import '../../css/b/b5yxc2b_y.css';
import '../../css/m/mdnlgwb3d.css';
import '../../css/o/oynk-s10v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGoWG3zdla"><g class="aql7dnt-u"><rect class="ocu06zbra"/><path class="b5yxc2b_y"/><circle class="mdnlgwb3d"/><circle class="oynk-s10v"/></g></mask></defs><path mask="url(#SVGoWG3zdla)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:data-screen",
	});
}

export default Component;
