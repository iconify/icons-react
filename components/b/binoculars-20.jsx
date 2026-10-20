import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajktiebca.css';
import '../../css/y/yox6r2bku.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajktiebca"/><path class="yox6r2bku"/>`,
		"fallback": "energy-icons:binoculars-20",
	});
}

export default Component;
