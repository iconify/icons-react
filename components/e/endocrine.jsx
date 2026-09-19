import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/q/q0of7lbrg.css';
import '../../css/i/i131otw-v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGyjeXjcvD"><g class="ufeehvblu"><path clip-rule="evenodd" class="q0of7lbrg"/><path class="i131otw-v"/></g></mask></defs><path mask="url(#SVGyjeXjcvD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:endocrine",
	});
}

export default Component;
