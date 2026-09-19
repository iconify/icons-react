import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6mkcxi9w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9QFFpbBI"><path class="u6mkcxi9w"/></mask></defs><path mask="url(#SVG9QFFpbBI)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:good-two",
	});
}

export default Component;
