import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bzv7c_bsn.css';
import '../../css/c/cu63mnb6h.css';
import '../../css/h/h4lclgb7y.css';
import '../../css/l/lkpmc8bcp.css';
import '../../css/z/zk1m5wb8s.css';
import '../../css/c/clvebbc9j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGw9P2buvo"><g class="ft5dv1b6b"><path class="bzv7c_bsn"/><circle class="cu63mnb6h"/><circle class="h4lclgb7y"/><circle class="lkpmc8bcp"/><path class="zk1m5wb8s"/><path class="clvebbc9j"/></g></mask></defs><path mask="url(#SVGw9P2buvo)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bear",
	});
}

export default Component;
