import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/q/qdzwi4b4l.css';
import '../../css/v/vaa0ik_1j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGPm4kxc4w"><g class="v3_i3wktz"><path class="qdzwi4b4l"/><path class="vaa0ik_1j"/></g></mask></defs><path mask="url(#SVGPm4kxc4w)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:format-brush",
	});
}

export default Component;
