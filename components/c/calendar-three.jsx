import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/j/j8__cxbvk.css';
import '../../css/x/xhe8el-mx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGl9BRebGy"><g class="aql7dnt-u"><rect class="j8__cxbvk"/><path class="xhe8el-mx"/></g></mask></defs><path mask="url(#SVGl9BRebGy)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:calendar-three",
	});
}

export default Component;
