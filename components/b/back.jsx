import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-5av7bmy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGt9zVddCE"><path clip-rule="evenodd" class="j-5av7bmy"/></mask></defs><path mask="url(#SVGt9zVddCE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:back",
	});
}

export default Component;
