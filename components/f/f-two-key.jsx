import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/h9qj9o6mz.css';
import '../../css/v/vw_bk-b4g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0gytQcZg"><g class="aql7dnt-u"><rect class="h9qj9o6mz"/><path class="vw_bk-b4g"/></g></mask></defs><path mask="url(#SVG0gytQcZg)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:f-two-key",
	});
}

export default Component;
