import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-ljzcb_h.css';
import '../../css/z/z2szi_geo.css';
import '../../css/d/d1xy-t7vc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-ljzcb_h"/><path class="z2szi_geo"/><path class="d1xy-t7vc"/>`,
		"fallback": "energy-icons:file-clock-20-bold",
	});
}

export default Component;
