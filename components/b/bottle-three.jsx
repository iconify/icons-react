import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/ripdjiu2y.css';
import '../../css/a/ay193v_1u.css';
import '../../css/x/x4fc4db_d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG12ZJyczv"><g class="aql7dnt-u"><path class="ripdjiu2y"/><path class="ay193v_1u"/><rect class="x4fc4db_d"/></g></mask></defs><path mask="url(#SVG12ZJyczv)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bottle-three",
	});
}

export default Component;
