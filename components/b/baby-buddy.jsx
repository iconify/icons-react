import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xuy4_ccyv.css';
import '../../css/f/ftntsh43y.css';
import '../../css/m/medvff8qk.css';

const viewBox = {"width":334.8,"height":305.416};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xuy4_ccyv"><path class="ftntsh43y"/><path class="medvff8qk"/></g>`,
		"fallback": "thesvg-color:baby-buddy",
	});
}

export default Component;
