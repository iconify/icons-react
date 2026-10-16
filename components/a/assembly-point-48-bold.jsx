import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/suxb2jj3d.css';
import '../../css/o/okbjcmbdu.css';
import '../../css/l/l9dwwj8lt.css';
import '../../css/o/ol66k46jk.css';
import '../../css/r/rfgq3ob8w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="suxb2jj3d"/><path class="okbjcmbdu"/><path class="l9dwwj8lt"/><path class="ol66k46jk"/><path class="rfgq3ob8w"/>`,
		"fallback": "energy-icons:assembly-point-48-bold",
	});
}

export default Component;
