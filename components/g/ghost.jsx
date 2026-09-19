import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/a/a8rml3bpr.css';
import '../../css/a/am3i6jbjw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGY0EtEeTz"><g class="ufeehvblu"><path class="a8rml3bpr"/><path class="am3i6jbjw"/></g></mask></defs><path mask="url(#SVGY0EtEeTz)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:ghost",
	});
}

export default Component;
