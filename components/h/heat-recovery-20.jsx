import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re19_f2ye.css';
import '../../css/u/um6ozge3g.css';
import '../../css/r/rcnrracia.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re19_f2ye"/><path class="um6ozge3g"/><path class="rcnrracia"/>`,
		"fallback": "energy-icons:heat-recovery-20",
	});
}

export default Component;
