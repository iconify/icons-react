import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0vjlubbx.css';
import '../../css/f/fp390_55c.css';
import '../../css/e/e7e9eebcd.css';
import '../../css/f/f5it5obaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0vjlubbx"/><path class="fp390_55c"/><path class="e7e9eebcd"/><path class="f5it5obaz"/>`,
		"fallback": "energy-icons:district-cooling-48-bold",
	});
}

export default Component;
