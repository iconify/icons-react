import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-tex-1tc.css';
import '../../css/v/vzrht_bih.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-tex-1tc"/><path class="vzrht_bih"/>`,
		"fallback": "energy-icons:ground-loop-20",
	});
}

export default Component;
