import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/z/za087rbox.css';
import '../../css/a/artd7ybar.css';
import '../../css/y/y1g8qib3o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGM68Q7c2T"><g class="rohhhzb0l"><path class="za087rbox"/><path clip-rule="evenodd" class="artd7ybar"/><path class="y1g8qib3o"/></g></mask></defs><path mask="url(#SVGM68Q7c2T)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:concept-sharing",
	});
}

export default Component;
