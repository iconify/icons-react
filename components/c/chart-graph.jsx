import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/o/ode45e42f.css';
import '../../css/j/j4e641bye.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGUYR4IUYW"><g class="v3_i3wktz"><path class="ode45e42f"/><path class="j4e641bye"/></g></mask></defs><path mask="url(#SVGUYR4IUYW)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:chart-graph",
	});
}

export default Component;
