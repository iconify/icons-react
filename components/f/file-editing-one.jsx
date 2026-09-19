import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/m3rbq0wjz.css';
import '../../css/i/infvoeb6w.css';
import '../../css/n/nzzcombqn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGVF7m0ctm"><g class="aql7dnt-u"><path class="m3rbq0wjz"/><path class="infvoeb6w"/><path class="nzzcombqn"/></g></mask></defs><path mask="url(#SVGVF7m0ctm)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:file-editing-one",
	});
}

export default Component;
