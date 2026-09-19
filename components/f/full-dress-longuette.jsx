import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/z/z_u5c7bbj.css';
import '../../css/j/jcgwwdrzw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGkGjh3dTA"><g class="aql7dnt-u"><path class="z_u5c7bbj"/><path class="jcgwwdrzw"/></g></mask></defs><path mask="url(#SVGkGjh3dTA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:full-dress-longuette",
	});
}

export default Component;
