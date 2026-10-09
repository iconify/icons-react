import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz0b40bzk.css';
import '../../css/x/xu6_eqb1f.css';
import '../../css/c/c65-ehvfy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kz0b40bzk"/><path class="xu6_eqb1f"/><path class="c65-ehvfy"/>`,
		"fallback": "energy-icons:cement-plant-48",
	});
}

export default Component;
