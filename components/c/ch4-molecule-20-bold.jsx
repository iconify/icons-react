import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3zawtbgl.css';
import '../../css/v/vvsj8nuvg.css';
import '../../css/c/cg6-adcsl.css';
import '../../css/z/zzce84blf.css';
import '../../css/v/vjpczricd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3zawtbgl"/><path class="vvsj8nuvg"/><path class="cg6-adcsl"/><path class="zzce84blf"/><path class="vjpczricd"/>`,
		"fallback": "energy-icons:ch4-molecule-20-bold",
	});
}

export default Component;
