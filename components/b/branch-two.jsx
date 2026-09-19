import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/v/vicn42bys.css';
import '../../css/h/huua5bc4g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGouPW9b4o"><g class="aql7dnt-u"><path clip-rule="evenodd" class="vicn42bys"/><path class="huua5bc4g"/></g></mask></defs><path mask="url(#SVGouPW9b4o)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:branch-two",
	});
}

export default Component;
