import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/msv6_bc6s.css';
import '../../css/h/hd1thrbaq.css';
import '../../css/s/spoflublb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGHQaQblpc"><g class="s9cl3zbei"><path class="msv6_bc6s"/><circle class="hd1thrbaq"/><path class="spoflublb"/></g></mask></defs><path mask="url(#SVGHQaQblpc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:folder-search",
	});
}

export default Component;
