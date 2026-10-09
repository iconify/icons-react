import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hac57wbhi.css';
import '../../css/l/lajtdm1vq.css';
import '../../css/w/whg_zqbig.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hac57wbhi"/><path class="lajtdm1vq"/><path class="whg_zqbig"/>`,
		"fallback": "energy-icons:arrow-up-circle-48",
	});
}

export default Component;
