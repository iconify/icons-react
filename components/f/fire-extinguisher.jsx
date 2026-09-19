import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ieiw_bcsa.css';
import '../../css/b/bq8amg8zg.css';
import '../../css/t/tb6enfb5d.css';
import '../../css/d/davxk4nfz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGweEm4ctb"><g class="ft5dv1b6b"><path class="ieiw_bcsa"/><path class="bq8amg8zg"/><path class="tb6enfb5d"/><circle class="davxk4nfz"/></g></mask></defs><path mask="url(#SVGweEm4ctb)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:fire-extinguisher",
	});
}

export default Component;
