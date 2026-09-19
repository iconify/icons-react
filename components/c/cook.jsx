import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/u_o0wac9f.css';
import '../../css/x/xk4qsobhv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXH65VdQg"><g class="aql7dnt-u"><path class="u_o0wac9f"/><path class="xk4qsobhv"/></g></mask></defs><path mask="url(#SVGXH65VdQg)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:cook",
	});
}

export default Component;
