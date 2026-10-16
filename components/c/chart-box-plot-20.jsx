import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km2fl-ght.css';
import '../../css/g/gjj2m4rmf.css';
import '../../css/u/ut1x-4bwy.css';
import '../../css/l/l5mv3femf.css';
import '../../css/a/aw2ifkfec.css';
import '../../css/d/dw57tibvg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km2fl-ght"/><path class="gjj2m4rmf"/><path class="ut1x-4bwy"/><path class="l5mv3femf"/><path class="aw2ifkfec"/><path class="dw57tibvg"/>`,
		"fallback": "energy-icons:chart-box-plot-20",
	});
}

export default Component;
