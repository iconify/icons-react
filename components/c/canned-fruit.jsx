import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/o/ood7b4x1k.css';
import '../../css/i/ia6zp40mg.css';
import '../../css/n/nldb4o1zg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTZ5I1b7D"><g class="rohhhzb0l"><path class="ood7b4x1k"/><path class="ia6zp40mg"/><path class="nldb4o1zg"/></g></mask></defs><path mask="url(#SVGTZ5I1b7D)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:canned-fruit",
	});
}

export default Component;
