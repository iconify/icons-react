import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/lfaqxlbsl.css';
import '../../css/m/mxqp5wvsi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgnWzveXa"><g class="aql7dnt-u"><path class="lfaqxlbsl"/><path class="mxqp5wvsi"/></g></mask></defs><path mask="url(#SVGgnWzveXa)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:escalators",
	});
}

export default Component;
