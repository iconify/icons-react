import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/j/jiqs0bwjn.css';
import '../../css/t/tnva8r8up.css';
import '../../css/i/ic972l8rf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbrrVVdvZ"><g class="ufeehvblu"><rect class="jiqs0bwjn"/><path class="tnva8r8up"/><path class="ic972l8rf"/></g></mask></defs><path mask="url(#SVGbrrVVdvZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:announcement",
	});
}

export default Component;
