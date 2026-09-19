import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/xrsuk-b2x.css';
import '../../css/g/gcng8vetl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQZPoheQf"><g class="v3_i3wktz"><path class="xrsuk-b2x"/><path class="gcng8vetl"/></g></mask></defs><path mask="url(#SVGQZPoheQf)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:home-two",
	});
}

export default Component;
