import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/eub6fxbql.css';
import '../../css/o/on_zgitys.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIz3eBe9X"><g class="aql7dnt-u"><path class="eub6fxbql"/><path class="on_zgitys"/></g></mask></defs><path mask="url(#SVGIz3eBe9X)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:flag",
	});
}

export default Component;
