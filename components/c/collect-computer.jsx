import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/y/yjmut_51b.css';
import '../../css/s/sdx7rac2w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG8ln5CdIP"><g class="aql7dnt-u"><path class="yjmut_51b"/><path class="sdx7rac2w"/></g></mask></defs><path mask="url(#SVG8ln5CdIP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:collect-computer",
	});
}

export default Component;
