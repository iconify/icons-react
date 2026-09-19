import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/q/qvlv7ibpn.css';
import '../../css/z/z_nh5vzzq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG2zh71bzI"><g class="ufeehvblu"><path class="qvlv7ibpn"/><path class="z_nh5vzzq"/></g></mask></defs><path mask="url(#SVG2zh71bzI)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:harm",
	});
}

export default Component;
