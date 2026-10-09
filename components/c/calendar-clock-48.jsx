import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r69m8kafb.css';
import '../../css/s/sfcgwqbcz.css';
import '../../css/s/sps9e7jfu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r69m8kafb"/><path class="sfcgwqbcz"/><path class="sps9e7jfu"/>`,
		"fallback": "energy-icons:calendar-clock-48",
	});
}

export default Component;
