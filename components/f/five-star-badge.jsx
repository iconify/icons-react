import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv9y21t5h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGfoAOLxWE"><path class="kv9y21t5h"/></mask></defs><path mask="url(#SVGfoAOLxWE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:five-star-badge",
	});
}

export default Component;
