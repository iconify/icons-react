import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/n/nxl8u5bfk.css';
import '../../css/i/iwovgq91n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGEVNo7c4F"><g class="wwvp95byt"><path class="nxl8u5bfk"/><path class="iwovgq91n"/></g></mask></defs><path mask="url(#SVGEVNo7c4F)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:collection-files",
	});
}

export default Component;
