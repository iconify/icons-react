import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/y/ys67npbsn.css';
import '../../css/x/xfswdop-m.css';
import '../../css/x/xtbnnobia.css';
import '../../css/n/nzuotib9e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRBQrpehk"><g class="s9cl3zbei"><path class="ys67npbsn"/><path class="xfswdop-m"/><path class="xtbnnobia"/><path class="nzuotib9e"/></g></mask></defs><path mask="url(#SVGRBQrpehk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:baggage-delay",
	});
}

export default Component;
