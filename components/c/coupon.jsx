import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/n/n4pernbka.css';
import '../../css/x/x7s0ksbho.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlnImqe7h"><g class="ufeehvblu"><path class="n4pernbka"/><path class="x7s0ksbho"/></g></mask></defs><path mask="url(#SVGlnImqe7h)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:coupon",
	});
}

export default Component;
