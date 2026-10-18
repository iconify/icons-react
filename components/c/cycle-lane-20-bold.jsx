import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpooeybdt.css';
import '../../css/a/abplkpb0d.css';
import '../../css/m/mtg49db6l.css';
import '../../css/q/qyom500zq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpooeybdt"/><path class="abplkpb0d"/><path class="mtg49db6l"/><path class="qyom500zq"/>`,
		"fallback": "energy-icons:cycle-lane-20-bold",
	});
}

export default Component;
