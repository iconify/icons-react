import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b10s5pbto.css';
import '../../css/h/hymlskbhi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b10s5pbto"/><path class="hymlskbhi"/>`,
		"fallback": "energy-icons:fridge-48-bold",
	});
}

export default Component;
