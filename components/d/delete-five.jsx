import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/b/b5kbnzv_b.css';
import '../../css/m/m_gx1l90r.css';
import '../../css/n/nzqb6cb6b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOsACrbJG"><g class="v3_i3wktz"><path class="b5kbnzv_b"/><path class="m_gx1l90r"/><path class="nzqb6cb6b"/></g></mask></defs><path mask="url(#SVGOsACrbJG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:delete-five",
	});
}

export default Component;
