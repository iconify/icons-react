import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a4i2bbc8w.css';
import '../../css/l/l9up7cgwq.css';
import '../../css/t/tbtmy19aj.css';
import '../../css/x/x3o8e895h.css';
import '../../css/b/bl4gd2e5a.css';
import '../../css/v/v0m5xdb6q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="ipSGobletOne0"><g class="ft5dv1b6b"><g clip-path="url(#ipSGobletOne1)" class="a4i2bbc8w"><path class="l9up7cgwq"/><path class="tbtmy19aj"/><ellipse transform="rotate(-45 14 14)" class="x3o8e895h"/><ellipse transform="rotate(-45 38 38)" class="bl4gd2e5a"/></g><defs><clipPath id="ipSGobletOne1"><path class="v0m5xdb6q"/></clipPath></defs></g></mask><path mask="url(#ipSGobletOne0)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:goblet-one",
	});
}

export default Component;
