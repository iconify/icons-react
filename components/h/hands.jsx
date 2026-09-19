import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/o/on8qlmp3x.css';
import '../../css/r/r71t5ps3q.css';
import '../../css/m/m820zubuq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG1jhcucOG"><g class="rohhhzb0l"><circle class="on8qlmp3x"/><path class="r71t5ps3q"/><path class="m820zubuq"/></g></mask></defs><path mask="url(#SVG1jhcucOG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:hands",
	});
}

export default Component;
