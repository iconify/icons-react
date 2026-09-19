import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nuht-ehxb.css';
import '../../css/c/c-tl-ufqx.css';
import '../../css/s/scxclyx4w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9A5j8kqH"><g class="ft5dv1b6b"><path class="nuht-ehxb"/><path class="c-tl-ufqx"/><path class="scxclyx4w"/></g></mask></defs><path mask="url(#SVG9A5j8kqH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:elevator",
	});
}

export default Component;
