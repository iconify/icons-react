import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/j/j6n739btm.css';
import '../../css/e/ewljbl57f.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGd7sdteNv"><g class="aql7dnt-u"><path class="j6n739btm"/><path class="ewljbl57f"/></g></mask></defs><path mask="url(#SVGd7sdteNv)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:folder-open",
	});
}

export default Component;
