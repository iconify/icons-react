import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndtwcqngv.css';
import '../../css/r/rxn3dxbuw.css';
import '../../css/n/nahpy4mwm.css';
import '../../css/o/ofmiloccm.css';
import '../../css/k/k859r6bpa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndtwcqngv"/><path class="rxn3dxbuw"/><path class="nahpy4mwm"/><path class="ofmiloccm"/><path class="k859r6bpa"/>`,
		"fallback": "energy-icons:bus-stop-20",
	});
}

export default Component;
