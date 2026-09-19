import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/q/qpt02dbmh.css';
import '../../css/s/sc3loydhq.css';
import '../../css/d/dkwu7obva.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGCc0HrtcT"><g class="wwvp95byt"><path class="qpt02dbmh"/><path class="sc3loydhq"/><path class="dkwu7obva"/></g></mask></defs><path mask="url(#SVGCc0HrtcT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:doc-detail",
	});
}

export default Component;
