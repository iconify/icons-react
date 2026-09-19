import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/b/bmx2kpbdt.css';
import '../../css/o/o3op-rbzi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGm5JjudRj"><g class="aql7dnt-u"><path class="bmx2kpbdt"/><path class="o3op-rbzi"/></g></mask></defs><path mask="url(#SVGm5JjudRj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bow",
	});
}

export default Component;
