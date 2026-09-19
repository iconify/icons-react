import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/p/pmp3xcuzj.css';
import '../../css/q/qm9fbjjax.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGYm3GvbXb"><g class="rohhhzb0l"><path clip-rule="evenodd" class="pmp3xcuzj"/><path class="qm9fbjjax"/></g></mask></defs><path mask="url(#SVGYm3GvbXb)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:apple-one",
	});
}

export default Component;
