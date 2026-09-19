import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/p/pvg15bqqz.css';
import '../../css/p/p2i7mob5a.css';
import '../../css/c/cl5y_sbef.css';
import '../../css/g/gcg1107xt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGxv1c7yjn"><g class="ufeehvblu"><path class="pvg15bqqz"/><path class="p2i7mob5a"/><path class="cl5y_sbef"/><path class="gcg1107xt"/></g></mask></defs><path mask="url(#SVGxv1c7yjn)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:devices",
	});
}

export default Component;
