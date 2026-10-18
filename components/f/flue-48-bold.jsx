import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jikxxnb7a.css';
import '../../css/r/r_d_ijm8a.css';
import '../../css/d/d8xz_bcrj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jikxxnb7a"/><path class="r_d_ijm8a"/><path class="d8xz_bcrj"/>`,
		"fallback": "energy-icons:flue-48-bold",
	});
}

export default Component;
