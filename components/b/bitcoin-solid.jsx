import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpaaegb5m.css';
import '../../css/q/qh8_e97db.css';
import '../../css/s/su66tdslr.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 lpaaegb5m"/><path class="clr-i-solid clr-i-solid-path-2 qh8_e97db"/><path class="clr-i-solid clr-i-solid-path-3 su66tdslr"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:bitcoin-solid",
	});
}

export default Component;
