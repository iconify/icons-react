import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwlcgjbwv.css';
import '../../css/d/dngedb3dc.css';
import '../../css/l/lg-e2pb6r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwlcgjbwv"/><path clip-rule="evenodd" class="dngedb3dc"/><path class="lg-e2pb6r"/>`,
		"fallback": "qlementine-icons:focus-16",
	});
}

export default Component;
