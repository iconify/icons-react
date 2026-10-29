import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqiql6y-e.css';
import '../../css/p/p5hpsnbhe.css';
import '../../css/i/iub1qbb_k.css';
import '../../css/n/nc1z8tb5e.css';
import '../../css/f/f6h5bybck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqiql6y-e wm-shadow"/><path class="p5hpsnbhe wm-k"/><path class="iub1qbb_k wm-k"/><path class="nc1z8tb5e wm-a"/><path class="f6h5bybck wm-a"/>`,
		"fallback": "withicons-pastel:chart-spline",
	});
}

export default Component;
