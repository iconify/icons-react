import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhr---bpz.css';
import '../../css/h/h_4f1111a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhr---bpz"/><path class="h_4f1111a"/>`,
		"fallback": "octicon:graph-24",
	});
}

export default Component;
