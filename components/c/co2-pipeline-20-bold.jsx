import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udeabbl7f.css';
import '../../css/b/b82thot2p.css';
import '../../css/f/fkr7gxrju.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udeabbl7f"/><path class="b82thot2p"/><path class="fkr7gxrju"/>`,
		"fallback": "energy-icons:co2-pipeline-20-bold",
	});
}

export default Component;
