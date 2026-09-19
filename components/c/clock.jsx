import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzcy8-vtw.css';
import '../../css/f/fv9ax2bso.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzcy8-vtw"/><path class="fv9ax2bso"/>`,
		"fallback": "ion:clock",
	});
}

export default Component;
