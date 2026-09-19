import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/ug-3ocbdk.css';
import '../../css/r/rx9127bvk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGuS1MtcQQ"><g class="aql7dnt-u"><path class="ug-3ocbdk"/><path class="rx9127bvk"/></g></mask></defs><path mask="url(#SVGuS1MtcQQ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:asterisk",
	});
}

export default Component;
