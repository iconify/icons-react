import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/x/xxb39ebcb.css';
import '../../css/t/tle1msbqc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGDr1hdcfD"><g class="hv130ab-t"><path clip-rule="evenodd" class="xxb39ebcb"/><path class="tle1msbqc"/></g></mask></defs><path mask="url(#SVGDr1hdcfD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:inner-shadow-bottom-left",
	});
}

export default Component;
