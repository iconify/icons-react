import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/en2ec-blp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzzFfQcsj"><path class="en2ec-blp"/></mask></defs><path mask="url(#SVGzzFfQcsj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:clothes-briefs",
	});
}

export default Component;
