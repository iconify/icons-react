import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec97uj83u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGwTKYc5fj"><path class="ec97uj83u"/></mask></defs><path mask="url(#SVGwTKYc5fj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:down-one",
	});
}

export default Component;
