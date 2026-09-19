import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/n/nfkg47b9j.css';
import '../../css/r/rr86q_70g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQA0tA7Oz"><g class="aql7dnt-u"><path class="nfkg47b9j"/><path class="rr86q_70g"/></g></mask></defs><path mask="url(#SVGQA0tA7Oz)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:chef-hat-one",
	});
}

export default Component;
