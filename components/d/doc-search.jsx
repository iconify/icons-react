import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sh0yo7t6f.css';
import '../../css/w/w2yyvybiu.css';
import '../../css/g/g229fc2zp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG2UEwHd1v"><g class="ft5dv1b6b"><path class="sh0yo7t6f"/><path class="w2yyvybiu"/><path class="g229fc2zp"/></g></mask></defs><path mask="url(#SVG2UEwHd1v)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:doc-search",
	});
}

export default Component;
