import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r69m8kafb.css';
import '../../css/s/sfcgwqbcz.css';
import '../../css/k/kem81wb3i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r69m8kafb"/><path class="sfcgwqbcz"/><path class="kem81wb3i"/>`,
		"fallback": "energy-icons:calendar-minus-48",
	});
}

export default Component;
