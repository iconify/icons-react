import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/d/dj-4ukbbc.css';
import '../../css/w/wjvvj7tqb.css';
import '../../css/y/yn5ovibru.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGI8ej4d6U"><g class="aql7dnt-u"><path class="dj-4ukbbc"/><path class="wjvvj7tqb"/><circle class="yn5ovibru"/></g></mask></defs><path mask="url(#SVGI8ej4d6U)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:health-products",
	});
}

export default Component;
