import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bho4nib7o.css';
import '../../css/f/f-k3qpbta.css';
import '../../css/x/xythsibvz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGqwqlQdLE"><g class="ft5dv1b6b"><path class="bho4nib7o"/><path class="f-k3qpbta"/><path class="xythsibvz"/></g></mask></defs><path mask="url(#SVGqwqlQdLE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:collect-picture",
	});
}

export default Component;
