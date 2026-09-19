import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbcy3hzsq.css';
import '../../css/l/lwa5up2ml.css';
import '../../css/r/rw27qob_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbcy3hzsq"/><path class="lwa5up2ml"/><path class="rw27qob_g"/>`,
		"fallback": "boxicons:help-octagon",
	});
}

export default Component;
