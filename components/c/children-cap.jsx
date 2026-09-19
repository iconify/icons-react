import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/s/sgc6nbcvj.css';
import '../../css/i/iewq-3_sp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGB2JP3bqc"><g class="aql7dnt-u"><path class="sgc6nbcvj"/><rect class="iewq-3_sp"/></g></mask></defs><path mask="url(#SVGB2JP3bqc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:children-cap",
	});
}

export default Component;
