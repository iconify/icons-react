import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/b/bw4wgduwd.css';
import '../../css/g/gcd74uk0y.css';
import '../../css/f/flza1qbgb.css';
import '../../css/g/g2_t03b5a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGipM2Yc2A"><g class="rohhhzb0l"><path class="bw4wgduwd"/><circle class="gcd74uk0y"/><path class="flza1qbgb"/><path class="g2_t03b5a"/></g></mask></defs><path mask="url(#SVGipM2Yc2A)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:electric-iron",
	});
}

export default Component;
