import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwehzwmcr.css';
import '../../css/a/au2lhd6pt.css';
import '../../css/o/o-1yhzbci.css';
import '../../css/r/r8qx4xbrt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwehzwmcr"/><path class="au2lhd6pt"/><path class="o-1yhzbci"/><path class="r8qx4xbrt"/>`,
		"fallback": "energy-icons:frost-protection-20-bold",
	});
}

export default Component;
