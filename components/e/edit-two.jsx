import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/z/zbfs8xbpm.css';
import '../../css/j/jvebuwoxn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG7zDqYc4O"><g class="v3_i3wktz"><path class="zbfs8xbpm"/><path class="jvebuwoxn"/></g></mask></defs><path mask="url(#SVG7zDqYc4O)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:edit-two",
	});
}

export default Component;
