import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adexpl72i.css';
import '../../css/x/xh09az3_x.css';
import '../../css/y/yhmnszb0i.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGajqY4cmp"><g class="adexpl72i"><path class="xh09az3_x"/><path class="yhmnszb0i"/></g></mask></defs><path mask="url(#SVGajqY4cmp)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:collection-files",
	});
}

export default Component;
