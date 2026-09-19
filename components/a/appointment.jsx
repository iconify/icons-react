import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/m/m-_faca9a.css';
import '../../css/y/ybvr_gb5s.css';
import '../../css/l/l5-whi4iw.css';
import '../../css/m/mwx4n6bfc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXba4qcCj"><g class="rohhhzb0l"><circle class="m-_faca9a"/><path class="ybvr_gb5s"/><circle class="l5-whi4iw"/><path class="mwx4n6bfc"/></g></mask></defs><path mask="url(#SVGXba4qcCj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:appointment",
	});
}

export default Component;
