import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/w/whph_o--x.css';
import '../../css/q/qdjay_j5b.css';
import '../../css/y/yveo74b2b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWNgSieUZ"><g class="ufeehvblu"><path class="whph_o--x"/><path class="qdjay_j5b"/><path class="yveo74b2b"/></g></mask></defs><path mask="url(#SVGWNgSieUZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:install",
	});
}

export default Component;
