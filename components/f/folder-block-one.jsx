import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/r/rjn-u5bcv.css';
import '../../css/p/pkah8qp_v.css';
import '../../css/q/qyprq1f6b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZSPNqdue"><g class="rohhhzb0l"><path class="rjn-u5bcv"/><circle class="pkah8qp_v"/><path class="qyprq1f6b"/></g></mask></defs><path mask="url(#SVGZSPNqdue)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:folder-block-one",
	});
}

export default Component;
