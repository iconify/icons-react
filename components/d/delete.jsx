import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/b/bdgvcmbxg.css';
import '../../css/m/m930bgbyr.css';
import '../../css/z/z5kq_inri.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGN3vajc4e"><g class="v3_i3wktz"><path class="bdgvcmbxg"/><path class="m930bgbyr"/><path class="z5kq_inri"/></g></mask></defs><path mask="url(#SVGN3vajc4e)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:delete",
	});
}

export default Component;
