import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/t/trn6jnbop.css';
import '../../css/z/zl60ugbjg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzhXN5bPn"><g class="rohhhzb0l"><path clip-rule="evenodd" class="trn6jnbop"/><path class="zl60ugbjg"/></g></mask></defs><path mask="url(#SVGzhXN5bPn)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:caution",
	});
}

export default Component;
