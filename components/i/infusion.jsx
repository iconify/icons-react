import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/d/drz-q8q9v.css';
import '../../css/p/p-rbzybho.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtcYcYcZi"><g class="ufeehvblu"><path class="drz-q8q9v"/><path class="p-rbzybho"/></g></mask></defs><path mask="url(#SVGtcYcYcZi)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:infusion",
	});
}

export default Component;
