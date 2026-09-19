import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/x/xcc5o-bxz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGqAlXveXc"><g class="s9cl3zbei"><rect class="g47cb4b4t"/><path class="xcc5o-bxz"/></g></mask></defs><path mask="url(#SVGqAlXveXc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:excel-one",
	});
}

export default Component;
