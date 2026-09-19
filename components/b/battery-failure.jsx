import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dedavkmjc.css';
import '../../css/r/r_0d81uyp.css';
import '../../css/m/m88_pabrs.css';
import '../../css/a/aklnzc9vd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGhUZ2G05E"><g class="ft5dv1b6b"><rect transform="rotate(-90 14 44)" class="dedavkmjc"/><path class="r_0d81uyp"/><path class="m88_pabrs"/><path class="aklnzc9vd"/></g></mask></defs><path mask="url(#SVGhUZ2G05E)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:battery-failure",
	});
}

export default Component;
