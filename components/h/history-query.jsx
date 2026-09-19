import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/m/mhrr42g8a.css';
import '../../css/p/pm3iujbxt.css';
import '../../css/l/l7sdvlbrp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG1Z7VMbzO"><g class="rohhhzb0l"><path class="mhrr42g8a"/><circle class="pm3iujbxt"/><path class="l7sdvlbrp"/></g></mask></defs><path mask="url(#SVG1Z7VMbzO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:history-query",
	});
}

export default Component;
