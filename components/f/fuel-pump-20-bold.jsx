import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azc5oubyv.css';
import '../../css/y/ywfl4rbfp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azc5oubyv"/><path class="ywfl4rbfp"/>`,
		"fallback": "energy-icons:fuel-pump-20-bold",
	});
}

export default Component;
