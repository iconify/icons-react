import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dhwc6r0ph.css';
import '../../css/y/yy40_gb2l.css';
import '../../css/k/k2lu90bwr.css';
import '../../css/y/yif_7eb6o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGsz25bd8b"><g class="ft5dv1b6b"><path class="dhwc6r0ph"/><rect class="yy40_gb2l"/><rect class="k2lu90bwr"/><path class="yif_7eb6o"/></g></mask></defs><path mask="url(#SVGsz25bd8b)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:charging-treasure",
	});
}

export default Component;
