import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/j/jm2q-_s5p.css';
import '../../css/v/vyaruxbrv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXSq9SH3E"><g class="aql7dnt-u"><path class="jm2q-_s5p"/><path class="vyaruxbrv"/></g></mask></defs><path mask="url(#SVGXSq9SH3E)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:conditioner",
	});
}

export default Component;
