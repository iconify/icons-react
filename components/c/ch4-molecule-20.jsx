import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh6nufbvy.css';
import '../../css/t/t7y523qvv.css';
import '../../css/n/n6oftwbus.css';
import '../../css/y/yvt-5nbdp.css';
import '../../css/r/re8ibnqua.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh6nufbvy"/><path class="t7y523qvv"/><path class="n6oftwbus"/><path class="yvt-5nbdp"/><path class="re8ibnqua"/>`,
		"fallback": "energy-icons:ch4-molecule-20",
	});
}

export default Component;
