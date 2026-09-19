import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/w/wmm6gzb0b.css';
import '../../css/k/kpxxoib8h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGKvA2Vbtk"><g class="s9cl3zbei"><path class="oo_vs07_g"/><path class="wmm6gzb0b"/><path class="kpxxoib8h"/></g></mask></defs><path mask="url(#SVGKvA2Vbtk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:benz",
	});
}

export default Component;
