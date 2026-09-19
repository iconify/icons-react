import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/a/a9oobvrrl.css';
import '../../css/q/q9twg8bgx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGo5ZyMvxE"><g class="aql7dnt-u"><path clip-rule="evenodd" class="a9oobvrrl"/><path class="q9twg8bgx"/></g></mask></defs><path mask="url(#SVGo5ZyMvxE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:building-four",
	});
}

export default Component;
