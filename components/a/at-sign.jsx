import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/q/qfgadhy5f.css';
import '../../css/j/j0yo1db3a.css';
import '../../css/j/jwu77k_om.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGd0Ho0cLs"><g class="v3_i3wktz"><path class="qfgadhy5f"/><path class="j0yo1db3a"/><path class="jwu77k_om"/></g></mask></defs><path mask="url(#SVGd0Ho0cLs)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:at-sign",
	});
}

export default Component;
