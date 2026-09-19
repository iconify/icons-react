import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/lh6ow3bkp.css';
import '../../css/j/jkqxc6rbv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGC9T2wcAH"><g class="aql7dnt-u"><path class="lh6ow3bkp"/><path class="jkqxc6rbv"/></g></mask></defs><path mask="url(#SVGC9T2wcAH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:chart-pie-one",
	});
}

export default Component;
