import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/c/cu5xsb1ef.css';
import '../../css/e/e24rsjd1i.css';
import '../../css/g/g180g5bxx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGvXQWmdhV"><g class="hv130ab-t"><rect class="cu5xsb1ef"/><path class="e24rsjd1i"/><path class="g180g5bxx"/></g></mask></defs><path mask="url(#SVGvXQWmdhV)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:f-n-key",
	});
}

export default Component;
