import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/decyyub_r.css';
import '../../css/z/zz5z_zbiw.css';
import '../../css/d/d880qybrj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="decyyub_r"/><path class="zz5z_zbiw"/><path class="d880qybrj"/>`,
		"fallback": "energy-icons:drum-20",
	});
}

export default Component;
