import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af6ze-elo.css';
import '../../css/v/vgqa32bip.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af6ze-elo"/><path class="vgqa32bip"/>`,
		"fallback": "energy-icons:cpu-20",
	});
}

export default Component;
