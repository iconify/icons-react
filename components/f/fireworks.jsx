import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g-1apjy3m.css';
import '../../css/q/qfgi8xb7d.css';
import '../../css/d/df6umsjoq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGrkwtXHMB"><g class="ft5dv1b6b"><path class="g-1apjy3m"/><path class="qfgi8xb7d"/><path class="df6umsjoq"/></g></mask></defs><path mask="url(#SVGrkwtXHMB)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:fireworks",
	});
}

export default Component;
