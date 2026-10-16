import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcia1ds6l.css';
import '../../css/i/il2c4vb5k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcia1ds6l"/><path class="il2c4vb5k"/>`,
		"fallback": "energy-icons:hazard-electric-20-bold",
	});
}

export default Component;
