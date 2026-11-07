import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5kplybjs.css';
import '../../css/g/g7yg0ac0f.css';
import '../../css/q/qevi5wb1d.css';
import '../../css/d/dlqpvfanl.css';
import '../../css/v/vsfmdqbpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5kplybjs"/><path class="g7yg0ac0f"/><path class="qevi5wb1d"/><path class="dlqpvfanl"/><path class="vsfmdqbpl"/>`,
		"fallback": "solar:bomb-minimalistic-bold-duotone",
	});
}

export default Component;
