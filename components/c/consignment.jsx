import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/c/cnt9cgbpv.css';
import '../../css/q/qjktzcb3c.css';
import '../../css/i/iqbmekbjd.css';
import '../../css/t/tpwofyy5y.css';
import '../../css/i/ijdcclchf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGyd3TUcSK"><g class="s9cl3zbei"><path class="cnt9cgbpv"/><path class="qjktzcb3c"/><path class="iqbmekbjd"/><path class="tpwofyy5y"/><path class="ijdcclchf"/></g></mask></defs><path mask="url(#SVGyd3TUcSK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:consignment",
	});
}

export default Component;
