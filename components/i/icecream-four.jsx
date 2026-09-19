import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/c/c5xlswnoj.css';
import '../../css/j/j6e-drbpa.css';
import '../../css/a/aovl4bbis.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGfkNRIbWO"><g class="aql7dnt-u"><path class="c5xlswnoj"/><path class="j6e-drbpa"/><path class="aovl4bbis"/></g></mask></defs><path mask="url(#SVGfkNRIbWO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:icecream-four",
	});
}

export default Component;
