import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/c/cdcw8t-og.css';
import '../../css/y/ymlpggmvd.css';
import '../../css/j/j4eiq8x9y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGmTatEd0f"><g class="aql7dnt-u"><path class="cdcw8t-og"/><path class="ymlpggmvd"/><path class="j4eiq8x9y"/></g></mask></defs><path mask="url(#SVGmTatEd0f)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:add-subset",
	});
}

export default Component;
