import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x6s3-gesu.css';
import '../../css/u/uqffttbwh.css';
import '../../css/f/fog_j6b2n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGofdc9gev"><g class="ft5dv1b6b"><path class="x6s3-gesu"/><path clip-rule="evenodd" class="uqffttbwh"/><path class="fog_j6b2n"/></g></mask></defs><path mask="url(#SVGofdc9gev)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:attention",
	});
}

export default Component;
