import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x6s3-gesu.css';
import '../../css/t/tdzw1ryds.css';
import '../../css/o/osytmmx4l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtuRKCcwE"><g class="ft5dv1b6b"><path class="x6s3-gesu"/><path clip-rule="evenodd" class="tdzw1ryds"/><path class="osytmmx4l"/></g></mask></defs><path mask="url(#SVGtuRKCcwE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:info",
	});
}

export default Component;
