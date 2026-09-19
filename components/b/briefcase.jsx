import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/omctlvrzx.css';
import '../../css/m/myr9nnb5g.css';
import '../../css/x/xfbnucutj.css';
import '../../css/k/kmn_ztb-h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGcEiSrcuR"><g class="aql7dnt-u"><path class="omctlvrzx"/><path class="myr9nnb5g"/><path class="xfbnucutj"/><path class="kmn_ztb-h"/></g></mask></defs><path mask="url(#SVGcEiSrcuR)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:briefcase",
	});
}

export default Component;
