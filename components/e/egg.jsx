import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/d/dvcapvbcu.css';
import '../../css/n/n3y4iwy_t.css';
import '../../css/s/szdnrl1jv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGEhaW4dLm"><g class="s9cl3zbei"><circle class="dvcapvbcu"/><path class="n3y4iwy_t"/><path class="szdnrl1jv"/></g></mask></defs><path mask="url(#SVGEhaW4dLm)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:egg",
	});
}

export default Component;
