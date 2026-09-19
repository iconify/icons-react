import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1_swcb_o.css';
import '../../css/p/p47c9-mcc.css';
import '../../css/j/jqjqplo7i.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGLqEOxaPY"><g class="v1_swcb_o"><path class="p47c9-mcc"/><path class="jqjqplo7i"/></g></mask></defs><path mask="url(#SVGLqEOxaPY)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:avocado",
	});
}

export default Component;
