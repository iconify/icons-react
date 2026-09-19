import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/k0ly7u-ku.css';
import '../../css/s/skqjyo4jb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGoSkjCeJU"><g class="aql7dnt-u"><path class="k0ly7u-ku"/><path class="skqjyo4jb"/></g></mask></defs><path mask="url(#SVGoSkjCeJU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:checklist",
	});
}

export default Component;
