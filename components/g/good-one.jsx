import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbmp_lblq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG4gDFRdvF"><path class="fbmp_lblq"/></mask></defs><path mask="url(#SVG4gDFRdvF)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:good-one",
	});
}

export default Component;
