import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsx9eqb7z.css';
import '../../css/t/t0y9dydjl.css';
import '../../css/v/v96txsrdu.css';
import '../../css/d/d7-7yjbmu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsx9eqb7z"/><path class="t0y9dydjl"/><path class="v96txsrdu"/><path class="d7-7yjbmu"/>`,
		"fallback": "energy-icons:battery-storage-20-bold",
	});
}

export default Component;
