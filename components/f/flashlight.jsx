import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/f/fjagq7bdj.css';
import '../../css/y/ydqauvg5t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgfK5ncmj"><g class="v3_i3wktz"><path class="fjagq7bdj"/><path class="ydqauvg5t"/></g></mask></defs><path mask="url(#SVGgfK5ncmj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:flashlight",
	});
}

export default Component;
