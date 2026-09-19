import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8i80_bea.css';
import '../../css/u/uul7rng0w.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 p8i80_bea"/><path class="clr-i-solid clr-i-solid-path-2 uul7rng0w"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:computer-solid",
	});
}

export default Component;
