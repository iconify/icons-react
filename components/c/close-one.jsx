import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/v/vfq1zz2zw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG55HJweZj"><g class="ufeehvblu"><path class="oo_vs07_g"/><path class="vfq1zz2zw"/></g></mask></defs><path mask="url(#SVG55HJweZj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:close-one",
	});
}

export default Component;
