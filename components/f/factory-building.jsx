import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adexpl72i.css';
import '../../css/l/lbk7xcb_i.css';
import '../../css/p/pfy9ymbjm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGmebooezY"><g class="adexpl72i"><path class="lbk7xcb_i"/><path class="pfy9ymbjm"/></g></mask></defs><path mask="url(#SVGmebooezY)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:factory-building",
	});
}

export default Component;
