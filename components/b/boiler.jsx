import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/d/d6a9rordt.css';
import '../../css/h/hizj3i7nm.css';
import '../../css/l/lfuwnosgt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGYFnZib2o"><g class="v3_i3wktz"><rect class="d6a9rordt"/><path class="hizj3i7nm"/><path class="lfuwnosgt"/></g></mask></defs><path mask="url(#SVGYFnZib2o)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:boiler",
	});
}

export default Component;
