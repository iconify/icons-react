import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/xedzjig2g.css';
import '../../css/q/qqiokb5mb.css';
import '../../css/x/x3fr-qpgw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGPf7KTOjh"><g class="v3_i3wktz"><path class="xedzjig2g"/><path class="qqiokb5mb"/><path class="x3fr-qpgw"/></g></mask></defs><path mask="url(#SVGPf7KTOjh)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:folder-close",
	});
}

export default Component;
