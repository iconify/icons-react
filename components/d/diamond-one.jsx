import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz8wjmb6i.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0kxxxdZR"><path class="tz8wjmb6i"/></mask></defs><path mask="url(#SVG0kxxxdZR)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:diamond-one",
	});
}

export default Component;
