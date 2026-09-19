import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/h9qj9o6mz.css';
import '../../css/z/zzsad172r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWNBpibuB"><g class="aql7dnt-u"><rect class="h9qj9o6mz"/><path class="zzsad172r"/></g></mask></defs><path mask="url(#SVGWNBpibuB)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:hashtag-key",
	});
}

export default Component;
