import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/a_ete1bey.css';
import '../../css/l/l3yvqyb3n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGmFZ5WbDH"><g class="rohhhzb0l"><circle class="a_ete1bey"/><path class="l3yvqyb3n"/></g></mask></defs><path mask="url(#SVGmFZ5WbDH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:flashlamp",
	});
}

export default Component;
