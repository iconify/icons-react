import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_x-8tr3r.css';
import '../../css/s/syc2h_bfp.css';
import '../../css/a/azwfg31kd.css';
import '../../css/h/hrh9qhbrz.css';
import '../../css/i/ii-b8448c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_x-8tr3r"/><path class="syc2h_bfp"/><path class="azwfg31kd"/><path class="hrh9qhbrz"/><path class="ii-b8448c"/>`,
		"fallback": "energy-icons:bulldozer-20",
	});
}

export default Component;
