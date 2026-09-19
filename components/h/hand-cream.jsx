import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/kb9zbkb1z.css';
import '../../css/i/iw8w2sijo.css';
import '../../css/x/xo86xh92i.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGxKCs9dge"><g class="aql7dnt-u"><circle class="kb9zbkb1z"/><path class="iw8w2sijo"/><path class="xo86xh92i"/></g></mask></defs><path mask="url(#SVGxKCs9dge)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:hand-cream",
	});
}

export default Component;
