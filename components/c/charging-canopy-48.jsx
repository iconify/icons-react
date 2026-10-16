import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgupoibyg.css';
import '../../css/k/krza2gbnk.css';
import '../../css/e/exrys5kfz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgupoibyg"/><path class="krza2gbnk"/><path class="exrys5kfz"/>`,
		"fallback": "energy-icons:charging-canopy-48",
	});
}

export default Component;
