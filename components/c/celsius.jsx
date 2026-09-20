import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orexe2b-x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><symbol id="SVGR15heb5B" viewBox="0 0 109.1 73.2"><path class="orexe2b-x"/></symbol></defs><use width="109.1" height="73.2" href="#SVGR15heb5B" transform="matrix(1.46 0 0 1.47 176.26 202.35)"/>`,
		"fallback": "meteocons:celsius",
	});
}

export default Component;
