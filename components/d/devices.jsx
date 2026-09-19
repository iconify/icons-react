import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/z/zv90fvb2w.css';
import '../../css/e/etce272qz.css';
import '../../css/b/b0244z36l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGd3cWvdLp"><g class="v3_i3wktz"><path class="zv90fvb2w"/><path class="etce272qz"/><path class="b0244z36l"/></g></mask></defs><path mask="url(#SVGd3cWvdLp)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:devices",
	});
}

export default Component;
