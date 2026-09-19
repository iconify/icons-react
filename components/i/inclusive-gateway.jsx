import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrso7y3c.css';
import '../../css/s/s7vus8b6x.css';
import '../../css/x/x1tpzjbth.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGb4KwUAdO"><g class="ylrso7y3c"><path class="s7vus8b6x"/><path class="x1tpzjbth"/></g></mask></defs><path mask="url(#SVGb4KwUAdO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:inclusive-gateway",
	});
}

export default Component;
