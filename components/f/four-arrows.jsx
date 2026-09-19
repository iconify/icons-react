import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/uj5tubcvw.css';
import '../../css/r/rivlizb9k.css';
import '../../css/q/qsirhpcjy.css';
import '../../css/o/ob_he3pam.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtRUZDbUm"><g class="aql7dnt-u"><path class="uj5tubcvw"/><path class="rivlizb9k"/><path class="qsirhpcjy"/><path class="ob_he3pam"/></g></mask></defs><path mask="url(#SVGtRUZDbUm)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:four-arrows",
	});
}

export default Component;
