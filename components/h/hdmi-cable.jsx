import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/r0fr59bon.css';
import '../../css/i/i69v71bja.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGYlJ9KcbF"><g class="aql7dnt-u"><path class="r0fr59bon"/><path class="i69v71bja"/></g></mask></defs><path mask="url(#SVGYlJ9KcbF)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:hdmi-cable",
	});
}

export default Component;
