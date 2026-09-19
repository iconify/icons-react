import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/y/ydxabxbnj.css';
import '../../css/v/vuurv2ibs.css';
import '../../css/p/pcd69pb3f.css';
import '../../css/g/g3kkxobsr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGUoMZPgRZ"><g class="wwvp95byt"><path class="ydxabxbnj"/><path class="vuurv2ibs"/><path class="pcd69pb3f"/><path class="g3kkxobsr"/></g></mask></defs><path mask="url(#SVGUoMZPgRZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:hot-pot",
	});
}

export default Component;
