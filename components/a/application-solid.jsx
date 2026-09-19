import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3s99mbew.css';
import '../../css/u/ufi4okb0l.css';
import '../../css/k/k0z7a6b-h.css';
import '../../css/t/tcbb08bkr.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 l3s99mbew"/><path class="clr-i-solid clr-i-solid-path-2 ufi4okb0l"/><path class="clr-i-solid clr-i-solid-path-3 k0z7a6b-h"/><path class="clr-i-solid clr-i-solid-path-4 tcbb08bkr"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:application-solid",
	});
}

export default Component;
