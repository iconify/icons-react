import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/h9qj9o6mz.css';
import '../../css/o/olqg_8byu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIukFKqsV"><g class="aql7dnt-u"><rect class="h9qj9o6mz"/><path class="olqg_8byu"/></g></mask></defs><path mask="url(#SVGIukFKqsV)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:f-three-key",
	});
}

export default Component;
