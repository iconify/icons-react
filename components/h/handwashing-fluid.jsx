import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/f/fb4hq5b3x.css';
import '../../css/i/ir_5pab5v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgtHFNceD"><g class="rohhhzb0l"><path class="fb4hq5b3x"/><path class="ir_5pab5v"/></g></mask></defs><path mask="url(#SVGgtHFNceD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:handwashing-fluid",
	});
}

export default Component;
