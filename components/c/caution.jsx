import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/e/e6xwq7bwr.css';
import '../../css/s/sa6e5v3it.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG5u6ebeaz"><g class="s9cl3zbei"><path clip-rule="evenodd" class="e6xwq7bwr"/><path class="sa6e5v3it"/></g></mask></defs><path mask="url(#SVG5u6ebeaz)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:caution",
	});
}

export default Component;
