import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/voor-mbwk.css';
import '../../css/b/bxxuiebbd.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 voor-mbwk"/><circle class="bxxuiebbd clr-i-solid clr-i-solid-path-2" transform="rotate(-9.22 17.955 18.05)"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:atom-solid",
	});
}

export default Component;
