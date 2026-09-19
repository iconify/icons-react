import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7vv9abbc.css';
import '../../css/y/yyop1qbid.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline--badged clr-i-outline-path-1--badged f7vv9abbc"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-2--badged yyop1qbid"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:blocks-group-outline-badged",
	});
}

export default Component;
