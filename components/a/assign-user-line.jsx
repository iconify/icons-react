import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6du5nbyy.css';
import '../../css/n/noyyo3bwv.css';
import '../../css/h/hqfj0jdxe.css';
import '../../css/x/x1cd-zb7u.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6du5nbyy clr-i-outline clr-i-outline-path-1"/><path class="clr-i-outline clr-i-outline-path-2 noyyo3bwv"/><path class="clr-i-outline clr-i-outline-path-3 hqfj0jdxe"/><path class="clr-i-outline clr-i-outline-path-4 x1cd-zb7u"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:assign-user-line",
	});
}

export default Component;
