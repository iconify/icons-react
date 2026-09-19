import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cef01bcjg.css';
import '../../css/a/afb9b6fbe.css';
import '../../css/r/r7pgu-b1y.css';
import '../../css/m/mfz_dvbkz.css';
import '../../css/p/p3nxasb2v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGb7lRybDH"><g class="ft5dv1b6b"><path class="cef01bcjg"/><path class="afb9b6fbe"/><path class="r7pgu-b1y"/><path class="mfz_dvbkz"/><path class="p3nxasb2v"/></g></mask></defs><path mask="url(#SVGb7lRybDH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:hot-air-balloon",
	});
}

export default Component;
