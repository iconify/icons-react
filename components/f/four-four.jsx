import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlbfa8bqm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGl2MrYbix"><path class="vlbfa8bqm"/></mask></defs><path mask="url(#SVGl2MrYbix)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:four-four",
	});
}

export default Component;
