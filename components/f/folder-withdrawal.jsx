import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/xedzjig2g.css';
import '../../css/i/iu5m6abdw.css';
import '../../css/p/ps5xdlbml.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGEZ1UMcea"><g class="v3_i3wktz"><path class="xedzjig2g"/><path class="iu5m6abdw"/><path class="ps5xdlbml"/></g></mask></defs><path mask="url(#SVGEZ1UMcea)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:folder-withdrawal",
	});
}

export default Component;
