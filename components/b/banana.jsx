import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/ooefdb7zl.css';
import '../../css/j/jasl4d3jm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6gpXUYuA"><g class="aql7dnt-u"><path class="ooefdb7zl"/><path class="jasl4d3jm"/></g></mask></defs><path mask="url(#SVG6gpXUYuA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:banana",
	});
}

export default Component;
