import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/x_ct48b7d.css';
import '../../css/x/xt05grelv.css';
import '../../css/i/i4q3uc85m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGo0bqVclo"><g class="v3_i3wktz"><path class="x_ct48b7d"/><path class="xt05grelv"/><path class="i4q3uc85m"/></g></mask></defs><path mask="url(#SVGo0bqVclo)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:inbox-out",
	});
}

export default Component;
