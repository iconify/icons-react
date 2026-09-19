import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy3qev87z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGrN7KDbir"><path class="fy3qev87z"/></mask></defs><path mask="url(#SVGrN7KDbir)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:glove",
	});
}

export default Component;
