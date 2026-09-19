import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iryic-bvb.css';
import '../../css/a/a0ra-m2wj.css';
import '../../css/m/m_uixnbmd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtPctNetI"><g class="ft5dv1b6b"><path class="iryic-bvb"/><path class="a0ra-m2wj"/><path clip-rule="evenodd" class="m_uixnbmd"/></g></mask></defs><path mask="url(#SVGtPctNetI)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:helpcenter",
	});
}

export default Component;
