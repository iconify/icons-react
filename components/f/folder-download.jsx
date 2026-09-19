import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/xedzjig2g.css';
import '../../css/q/qdhw8-brj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0cW3peXZ"><g class="v3_i3wktz"><path class="xedzjig2g"/><path class="qdhw8-brj"/></g></mask></defs><path mask="url(#SVG0cW3peXZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:folder-download",
	});
}

export default Component;
