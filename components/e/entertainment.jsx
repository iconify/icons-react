import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/q/qipc3dbbk.css';
import '../../css/a/ax2murb2d.css';
import '../../css/q/qg-fvrb0k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGFtOXScGc"><g class="v3_i3wktz"><path class="qipc3dbbk"/><path class="ax2murb2d"/><path class="qg-fvrb0k"/></g></mask></defs><path mask="url(#SVGFtOXScGc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:entertainment",
	});
}

export default Component;
