import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/y/yzy8hbb9y.css';
import '../../css/i/i3cltkb9x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRcNQVnQT"><g class="aql7dnt-u"><path class="yzy8hbb9y"/><path class="i3cltkb9x"/></g></mask></defs><path mask="url(#SVGRcNQVnQT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:graphic-stitching-four",
	});
}

export default Component;
