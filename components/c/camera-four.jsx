import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/r/ruz3jronq.css';
import '../../css/o/o7-mq32hy.css';
import '../../css/p/pv49lt1rs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGdRJRtdZX"><g class="rohhhzb0l"><path class="ruz3jronq"/><path class="o7-mq32hy"/><path class="pv49lt1rs"/></g></mask></defs><path mask="url(#SVGdRJRtdZX)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:camera-four",
	});
}

export default Component;
